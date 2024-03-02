import { Module } from '@nestjs/common';
import { FrequentlyAskedQuestionService } from './frequently-asked-question.service';
import { FrequentlyAskedQuestionController } from './frequently-asked-question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrequentlyAskedQuestion } from './entities/frequently-asked-question.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([FrequentlyAskedQuestion]),
  ],
  controllers: [FrequentlyAskedQuestionController],
  providers: [FrequentlyAskedQuestionService],
})
export class FrequentlyAskedQuestionModule {}
