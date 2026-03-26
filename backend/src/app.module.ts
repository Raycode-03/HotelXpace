import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { NewsletterModule } from './newsletter/newsletter.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { HotelsModule } from './hotels/hotels.module';
import { HealthModule } from './health/health.module.js';

@Module({
    imports: [NewsletterModule, HealthModule, PrismaModule, HotelsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
