import {
    Injectable,
    NotFoundException,
    BadRequestException,
    InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import { GoogleGenerativeAI } from '@google/generative-ai';
const geocodingClient = mbxGeocoding({
    accessToken: process.env.MAPBOX_ACCESS_TOKEN!,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

@Injectable()
export class HotelsService {
    constructor(private prisma: PrismaService) {}

    async searchHotels(
        location?: string,
        type?: string,
        price?: string,
        limit: number = 20,
    ) {
        try {
            if (limit < 1 || limit > 100) {
                throw new BadRequestException(
                    'Limit must be between 1 and 100',
                );
            }
            const where: any = {};

            if (location) {
                where.OR = [
                    {
                        location: {
                            contains: location,
                            mode: 'insensitive',
                        },
                    },
                    {
                        name: {
                            contains: location,
                            mode: 'insensitive',
                        },
                    },
                ];

                if (type) {
                    where.category = {
                        contains: type,
                        mode: 'insensitive',
                    };
                }

                if (price) {
                    const { minPrice, maxPrice } = this.parsePrice(price);

                    if (
                        price &&
                        minPrice === undefined &&
                        maxPrice === undefined
                    ) {
                        throw new BadRequestException(
                            `Invalid price format: "${price}"`,
                        );
                    }
                    if (minPrice !== undefined || maxPrice !== undefined) {
                        where.price = {};
                        if (minPrice !== undefined) where.price.gte = minPrice;
                        if (maxPrice !== undefined) where.price.lte = maxPrice;
                    }
                }

                const hotels = await this.prisma.hotel.findMany({
                    where,
                    take: Number(limit) || 20,
                    orderBy: { rating: 'desc' },
                });

                if (!hotels || hotels.length === 0) {
                    throw new NotFoundException(
                        'No hotels found matching your search criteria',
                    );
                }

                // 200 - OK (implicit)
                return {
                    status: 200,
                    message: 'Hotels retrieved successfully',
                    hotels,
                    total: hotels.length,
                };
            }
        } catch (error) {
            console.error('Error searching hotels:', error);
            if (error.status) {
                throw error;
            }

            throw new InternalServerErrorException(
                'An unexpected error occurred while searching hotels',
            );
        }
    }

    private parsePrice(price: string): {
        minPrice?: number;
        maxPrice?: number;
    } {
        try {
            if (!price) return {};
            if (price.includes('100,000+') || price.includes('100000+'))
                return { minPrice: 100000 };

            const match = price.match(/([\d,]+)\s*[-–]\s*[₦]?([\d,]+)/);
            if (!match) return {};

            return {
                minPrice: parseInt(match[1].replace(/,/g, '')),
                maxPrice: parseInt(match[2].replace(/,/g, '')),
            };
        } catch (error) {
            throw new BadRequestException('Failed to parse price range');
        }
    }
}
