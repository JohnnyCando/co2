import { Test, TestingModule } from '@nestjs/testing';
import { FootprintHistoryService } from './footprint-history.service';

describe('FootprintHistoryService', () => {
  let service: FootprintHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FootprintHistoryService],
    }).compile();

    service = module.get<FootprintHistoryService>(FootprintHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
