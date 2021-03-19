import { TestBed } from '@angular/core/testing';

import { DummyHttpRequestService } from './dummy-http-request.service';

describe('DummyHttpRequestService', () => {
  let service: DummyHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
