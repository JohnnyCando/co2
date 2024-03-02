import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyAskedQuestionController } from './frequently-asked-question.controller';
import { FrequentlyAskedQuestionService } from './frequently-asked-question.service';

describe('FrequentlyAskedQuestionController', () => {
  let controller: FrequentlyAskedQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrequentlyAskedQuestionController],
      providers: [FrequentlyAskedQuestionService],
    }).compile();

    controller = module.get<FrequentlyAskedQuestionController>(FrequentlyAskedQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
