import { Module } from '@nestjs/common';
import { AnswerTypesService } from './answer-types.service';
import { AnswerTypesController } from './answer-types.controller';

@Module({
  controllers: [AnswerTypesController],
  providers: [AnswerTypesService],
})
export class AnswerTypesModule {}
