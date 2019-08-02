import { TestBed } from '@angular/core/testing';

import { ItemCategoryRoleService } from './itemCategoryRole.service';

describe('ItemCategoryRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemCategoryRoleService = TestBed.get(ItemCategoryRoleService);
    expect(service).toBeTruthy();
  });
});
