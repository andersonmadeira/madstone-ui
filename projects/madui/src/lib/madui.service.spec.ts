import { TestBed } from '@angular/core/testing';

import { MadUIService } from './madui.service';

describe('MadUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MadUIService = TestBed.get(MadUIService);
    expect(service).toBeTruthy();
  });
});
