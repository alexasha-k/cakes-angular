import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { CatalogGroups, CatalogGroupsItems, MainNavService } from '../main-nav.service';
import { CatalogListService } from './catalog-list.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})

export class CatalogListComponent implements OnInit {

  @Input() catalogGroup: CatalogGroups;
  //catalogGroups: CatalogGroups[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mainNavService: MainNavService,
    private location: Location,
    private catalogListService: CatalogListService
  ) { }

  getCatalogList(): void {
    const category = +this.route.snapshot.paramMap.get('id');
    this.mainNavService.getCatalogGroup(category)
      .subscribe(
        catalogGroup => this.catalogGroup = catalogGroup
      );
  }

  // showCatalogGroups() {
  //   this.mainNavService.getCatalogGroups()
  //     .subscribe(
  //       catalogGroups => this.catalogGroups = catalogGroups
  //     );
  // }

  showListView: boolean = false;
  changeView(event) {
    this.showListView = (event === "List");
  }

  showListSort: string;
  changeSort(event) {
    this.showListSort = event;
  }

  maxPrice: number;
  minPrice: number;
  changeViewMinMaxPrice(event) {
    this.maxPrice = event.maxPrice;
    this.minPrice = event.minPrice;
  }

  showMaxPrice() {
    this.mainNavService.getMaxPrice().subscribe(price => this.maxPrice = price);
  }

  showMinPrice() {
    this.mainNavService.getMinPrice().subscribe(price => this.minPrice = price);
  }

  ngOnInit(): void {
    this.getCatalogList();
    //this.showCatalogGroups();
    this.showMaxPrice();
    this.showMinPrice();
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.getCatalogList();
        }
      });
  }



}
