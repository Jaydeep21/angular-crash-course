import { TestBed } from '@angular/core/testing';

import { ResipesService } from './resipes.service';

describe('ResipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResipesService = TestBed.get(ResipesService);
    expect(service).toBeTruthy();
  });
});
