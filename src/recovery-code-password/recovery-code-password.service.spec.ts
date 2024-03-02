import { Test, TestingModule } from '@nestjs/testing';
import { RecoveryCodePasswordService } from './recovery-code-password.service';

describe('RecoveryCodePasswordService', () => {
  let service: RecoveryCodePasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecoveryCodePasswordService],
    }).compile();

    service = module.get<RecoveryCodePasswordService>(RecoveryCodePasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
