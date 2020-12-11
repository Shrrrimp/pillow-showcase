import { TestBed } from '@angular/core/testing';

import { PillowService } from './pillow.service';

describe('PillowService', () => {
  let service: PillowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PillowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
