import { Controller , HttpCode , HttpStatus} from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { Post , Body } from '@nestjs/common';
@Controller('newsletter')
export class NewsletterController {
    constructor(private readonly newsletterService: NewsletterService) {}

  @Post('subscribe')
  @HttpCode(HttpStatus.CREATED)
  subscribe(@Body('email') email: string) {
    return this.newsletterService.subscribe(email);
  }
}
