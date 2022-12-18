import { TestBed } from '@angular/core/testing';

import { LinePageService } from './line-page.service';

describe('LinePageService', () => {
  let service: LinePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
