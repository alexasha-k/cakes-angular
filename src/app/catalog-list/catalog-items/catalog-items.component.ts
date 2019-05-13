import { Component, OnInit, Input, OnChanges, SimpleChange, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, query, stagger, style, animate, transition } from '@angular/animations';

import { Observable, from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-catalog-items',
  templateUrl: './catalog-items.component.html',
  styleUrls: ['./catalog-items.component.scss'],
  animations: [
    trigger('showMe', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.5s', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('0.15s', style({opacity: 0}))
      ])
    ])
  ]
})
export class CatalogItemsComponent implements OnInit {

  @Input() showListView : boolean;
  @Input() showListSort : string;
  @Input() maxPrice : number;
  @Input() minPrice : number;
  @Input() id : number;

  constructor(
    private route: ActivatedRoute,
    private mainNavService: MainNavService
  ) { }

  catalogGroupItems: any;

  getCatalogGroupItems() {
    const category = this.id;
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
      if (propName == "id") {
        this.getCatalogGroupItems();
      }
    }
  }
}
