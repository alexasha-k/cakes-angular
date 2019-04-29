import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-catalog-items',
  templateUrl: './catalog-items.component.html',
  styleUrls: ['./catalog-items.component.scss']
})
export class CatalogItemsComponent implements OnInit {

  @Input() showListView : boolean;
  @Input() showListSort : string;
  @Input() maxPrice : number;
  @Input() minPrice : number;

  constructor(
    private route: ActivatedRoute,
    private mainNavService: MainNavService
  ) { }

  catalogGroupItems: any;

  getCatalogGroupItems() {
    const category = +this.route.snapshot.paramMap.get('id');
    this.mainNavService.getCatalogSubgroup(category)
      .pipe(
        map(({ items }) => items.filter(a => a.options[0].price > this.minPrice && a.options[0].price < this.maxPrice))
      )
      .subscribe(item => this.catalogGroupItems = item);
  }

  sortCatalogGroupItems(type) {
    if (!type) return false;
    const category = +this.route.snapshot.paramMap.get('id');
    if (type == "Price") {
      this.mainNavService.getCatalogSubgroup(category)
      .pipe(
        map(({ items }) => items.sort((a,b) => a.options[0].price - b.options[0].price))
      )
      .subscribe(item => this.catalogGroupItems = item);
    } else if (type == "Size") {
      this.mainNavService.getCatalogSubgroup(category)
      .pipe(
        map(({ items }) => items.sort((a,b) => parseInt(a.options[0].title) - parseInt(b.options[0].title)))
      )
      .subscribe(item => this.catalogGroupItems = item);
    }

  }

  ngOnInit() {
    this.getCatalogGroupItems();
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      if (propName == "maxPrice" || propName == "minPrice") {
        this.getCatalogGroupItems();
      }
      if (propName == "showListSort") {
        this.sortCatalogGroupItems(this.showListSort);
      }
    }
  }
}
