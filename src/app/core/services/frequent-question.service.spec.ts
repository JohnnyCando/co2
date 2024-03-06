import { TestBed } from '@angular/core/testing';

import { FrequentQuestionService } from './frequent-question.service';

describe('FrequentQuestionService', () => {
  let service: FrequentQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrequentQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
