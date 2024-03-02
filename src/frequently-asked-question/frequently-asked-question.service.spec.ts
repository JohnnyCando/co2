import { Test, TestingModule } from '@nestjs/testing';
import { FrequentlyAskedQuestionService } from './frequently-asked-question.service';

describe('FrequentlyAskedQuestionService', () => {
  let service: FrequentlyAskedQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrequentlyAskedQuestionService],
    }).compile();

    service = module.get<FrequentlyAskedQuestionService>(FrequentlyAskedQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
