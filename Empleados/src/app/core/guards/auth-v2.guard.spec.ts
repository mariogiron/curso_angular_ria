import { TestBed } from '@angular/core/testing';

import { AuthV2Guard } from './auth-v2.guard';

describe('AuthV2Guard', () => {
  let guard: AuthV2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthV2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
