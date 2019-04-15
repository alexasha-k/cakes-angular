import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MainNavService } from '../main-nav.service';
import { CatalogListService } from './catalog-list.service';

import { Observable, from } from 'rxjs';
import { filter } from 'rxjs/operators';

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
    private location: Location,
    private catalogListService: CatalogListService
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
    this.showCatalogGroups();
    this.showMaxPrice();
    this.showMinPrice();
  }
}
