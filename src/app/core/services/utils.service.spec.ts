import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('ConfirmDialogService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
