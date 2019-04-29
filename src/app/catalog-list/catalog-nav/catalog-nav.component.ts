import { Component, OnInit } from '@angular/core';

import { CatalogGroups, MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-catalog-nav',
  templateUrl: './catalog-nav.component.html',
  styleUrls: ['./catalog-nav.component.scss']
})
export class CatalogNavComponent implements OnInit {
  catalogGroups: CatalogGroups[];

  constructor(
    private mainNavService: MainNavService
  ) { }

  showCatalogGroups() {
    this.mainNavService.getCatalogGroups()
      .subscribe(
        catalogGroups => this.catalogGroups = catalogGroups
      );
  }

  ngOnInit() {
    this.showCatalogGroups();
  }

}
