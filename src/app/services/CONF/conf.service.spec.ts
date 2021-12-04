import { TestBed } from '@angular/core/testing';

import { CONF } from './conf.service';

describe('CONF', () => {
  let service: CONF;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CONF);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
