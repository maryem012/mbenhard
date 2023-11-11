import { TestBed } from '@angular/core/testing';

import { ContentMainService } from './content-main.service';

describe('ContentMainService', () => {
  let service: ContentMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
