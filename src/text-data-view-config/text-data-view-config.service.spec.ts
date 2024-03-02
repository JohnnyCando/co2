import { Test, TestingModule } from '@nestjs/testing';
import { TextDataViewConfigService } from './text-data-view-config.service';

describe('TextDataViewConfigService', () => {
  let service: TextDataViewConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextDataViewConfigService],
    }).compile();

    service = module.get<TextDataViewConfigService>(TextDataViewConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
