import { Test, TestingModule } from '@nestjs/testing';
import { FootprintHistoryController } from './footprint-history.controller';
import { FootprintHistoryService } from './footprint-history.service';

describe('FootprintHistoryController', () => {
  let controller: FootprintHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FootprintHistoryController],
      providers: [FootprintHistoryService],
    }).compile();

    controller = module.get<FootprintHistoryController>(FootprintHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
