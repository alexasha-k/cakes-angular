import { Component, OnInit } from '@angular/core';

import { MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-catalog-nav',
  templateUrl: './catalog-nav.component.html',
  styleUrls: ['./catalog-nav.component.scss']
})
export class CatalogNavComponent implements OnInit {
  catalogGroups: СatalogGroups[];

  constructor(
    private mainNavService: MainNavService
  ) { }

  showCatalogGroups() {
    this.mainNavService.getCatalogGroups()
      .subscribe(
        catalogGroups => this.catalogGroups = catalogGroups,
        error => this.error = error
      );
  }

  ngOnInit() {
    this.showCatalogGroups();
  }

}
