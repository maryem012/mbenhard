import { TestBed } from '@angular/core/testing';

import { ContentSecService } from './content-sec.service';

describe('ContentSecService', () => {
  let service: ContentSecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentSecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
