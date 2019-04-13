import { TestBed, inject } from '@angular/core/testing';

import { CatalogListService } from './catalog-list.service';

describe('CatalogListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogListService]
    });
  });

  it('should be created', inject([CatalogListService], (service: CatalogListService) => {
    expect(service).toBeTruthy();
  }));
});
