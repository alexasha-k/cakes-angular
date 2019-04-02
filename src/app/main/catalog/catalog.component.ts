import { Component, OnInit } from '@angular/core';

import { MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private mainNavService: MainNavService) { }

  catalogGroups: СatalogGroups[];

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
