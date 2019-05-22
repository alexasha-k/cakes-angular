import { Component, OnInit } from '@angular/core';

import { CatalogGroups, MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private mainNavService: MainNavService) { }

  catalogGroups: CatalogGroups[];

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
