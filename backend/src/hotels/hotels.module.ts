import { Module } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService,
     { provide: APP_GUARD, useClass: ThrottlerGuard },
  ]
})
export class HotelsModule {}
    