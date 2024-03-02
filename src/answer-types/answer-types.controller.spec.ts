import { Test, TestingModule } from '@nestjs/testing';
import { AnswerTypesController } from './answer-types.controller';
import { AnswerTypesService } from './answer-types.service';

describe('AnswerTypesController', () => {
  let controller: AnswerTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerTypesController],
      providers: [AnswerTypesService],
    }).compile();

    controller = module.get<AnswerTypesController>(AnswerTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
