import { Test, TestingModule } from '@nestjs/testing';
import { AnswerTypesService } from './answer-types.service';

describe('AnswerTypesService', () => {
  let service: AnswerTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswerTypesService],
    }).compile();

    service = module.get<AnswerTypesService>(AnswerTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
