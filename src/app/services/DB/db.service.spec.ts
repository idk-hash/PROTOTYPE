import { TestBed } from '@angular/core/testing';

import { DB } from './db.service';

describe('DB', () => {
  let service: DB;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DB);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
