import { TestBed } from '@angular/core/testing';

import { RecoveryCodePasswordService } from './recovery-code-password.service';

describe('RecoveryCodePasswordService', () => {
  let service: RecoveryCodePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoveryCodePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
