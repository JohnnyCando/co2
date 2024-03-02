import { Test, TestingModule } from '@nestjs/testing';
import { TextDataViewConfigController } from './text-data-view-config.controller';
import { TextDataViewConfigService } from './text-data-view-config.service';

describe('TextDataViewConfigController', () => {
  let controller: TextDataViewConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextDataViewConfigController],
      providers: [TextDataViewConfigService],
    }).compile();

    controller = module.get<TextDataViewConfigController>(TextDataViewConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
