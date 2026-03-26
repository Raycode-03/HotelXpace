import { Controller , Get , Query} from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) { }

   @Get('search')
  searchHotels(
    @Query('location') location?: string,
    @Query('type') type?: string,
    @Query('price') price?: string,
    @Query('limit') limit: string = '20',
  ) {
    return this.hotelsService.searchHotels(location, type, price, Number(limit) || 20);
  }

}