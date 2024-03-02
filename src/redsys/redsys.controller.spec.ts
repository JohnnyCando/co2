import { Test, TestingModule } from '@nestjs/testing';
import { RedsysController } from './redsys.controller';
import { RedsysService } from './redsys.service';

describe('RedsysController', () => {
  let controller: RedsysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedsysController],
      providers: [RedsysService],
    }).compile();

    controller = module.get<RedsysController>(RedsysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
