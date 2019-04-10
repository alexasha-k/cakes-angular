import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MainNavService } from '../main-nav.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  @Input() catalogGroup : СatalogGroups;
  catalogGroups: СatalogGroups[];

  constructor(
    private route: ActivatedRoute,
    private mainNavService: MainNavService,
    private location: Location
  ) { }

  getCatalogList(): void {
    const category = +this.route.snapshot.paramMap.get('id');
    this.mainNavService.getCatalogGroup(category)
      .subscribe(
        catalogGroup => this.catalogGroup = catalogGroup,
        error => this.error = error
      );
  }

  showCatalogGroups() {
    this.mainNavService.getCatalogGroups()
      .subscribe(
        catalogGroups => this.catalogGroups = catalogGroups,
        error => this.error = error
      );
  }

  ngOnInit(): void {
    this.getCatalogList();
    this.showCatalogGroups();
  }

}
