import { TestBed } from '@angular/core/testing';

import { PersonsMediaService } from './personsMedia.service';

describe('PersonsMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonsMediaService = TestBed.get(PersonsMediaService);
    expect(service).toBeTruthy();
  });
});
