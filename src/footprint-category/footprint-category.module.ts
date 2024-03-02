import { Module } from '@nestjs/common';
import { FootprintCategoryService } from './footprint-category.service';
import { FootprintCategoryController } from './footprint-category.controller';

@Module({
  controllers: [FootprintCategoryController],
  providers: [FootprintCategoryService],
})
export class FootprintCategoryModule {}
