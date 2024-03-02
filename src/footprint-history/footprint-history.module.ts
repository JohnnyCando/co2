import { Module } from '@nestjs/common';
import { FootprintHistoryService } from './footprint-history.service';
import { FootprintHistoryController } from './footprint-history.controller';
import { FootprintHistory } from './entities/footprint-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([FootprintHistory]),],
  controllers: [FootprintHistoryController],
  providers: [FootprintHistoryService],
})
export class FootprintHistoryModule {}
