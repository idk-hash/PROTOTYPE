import { TestBed } from '@angular/core/testing';

import { FBOOT } from './fboot.service';

describe('FBOOT', () => {
  let service: FBOOT;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FBOOT);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
