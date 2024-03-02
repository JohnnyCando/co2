import { Test, TestingModule } from '@nestjs/testing';
import { RecoveryCodePasswordController } from './recovery-code-password.controller';
import { RecoveryCodePasswordService } from './recovery-code-password.service';

describe('RecoveryCodePasswordController', () => {
  let controller: RecoveryCodePasswordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecoveryCodePasswordController],
      providers: [RecoveryCodePasswordService],
    }).compile();

    controller = module.get<RecoveryCodePasswordController>(RecoveryCodePasswordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
