import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NewsletterService {
  constructor(private prisma: PrismaService) { }

  async subscribe(email: string) {
    try {
      const existing = await this.prisma.newsletter.findUnique({
        where: { email },
      });

      if (existing) {
        throw new ConflictException('Email already subscribed');
      }


      await this.prisma.newsletter.create({
        data: { email },
      });
      return { message: 'Subscribed successfully' };
    } catch (error) {
      throw new InternalServerErrorException('Failed to subscribe');
    }
  }
}
