import { TestBed } from '@angular/core/testing';

import { FacebookPageService } from './facebook-page.service';

describe('FacebookPageService', () => {
  let service: FacebookPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
