import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

import { MainNavService } from '../main-nav.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})

export class CatalogListComponent implements OnInit {

  @Input() catalogGroup : СatalogGroups;
  @Output() catalogGroup : СatalogGroups;
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

  showListView: boolean = false;
  changeView(event) {
    this.showListView = (event === "List");
  }



  maxPrice: number = 200;
  minPrice: number = 10;
  filterByPrice(el) {
    return el.options[0].price <= 200 && el.options[0].price >= 0;
  }

  ngOnInit(): void {
    this.getCatalogList();
    this.showCatalogGroups();
  }

}

//from(catalogGroup).pipe(
//  filter(catalogGroup => catalogGroup.options[0].price > 100)
//).subscribe(catalogGroup => console.log(catalogGroup));
