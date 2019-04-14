import { Component, OnInit, Input } from '@angular/core';
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
  @Input() maxPrice : number;
  @Input() minPrice : number;

  constructor(
    private route: ActivatedRoute,
    private mainNavService: MainNavService
  ) { }


  catalogGroupItems : any;

  getCatalogGroupItems() {
    const category = +this.route.snapshot.paramMap.get('id');
    this.mainNavService.getCatalogGroup(category)
      .pipe(
        map(({ items }) => items.filter(a => a.options[0].price > this.minPrice && a.options[0].price < this.maxPrice))
      )
      .subscribe(item => this.catalogGroupItems = item);
  }

  sortCatalogGroupItems() {
    const category = +this.route.snapshot.paramMap.get('id');
    this.mainNavService.getCatalogSubgroup(category)
    .pipe(
      //map(({ items }) => items.sort((a,b) => a.options[0].price - b.options[0].price))
      map(({ items }) => items.filter(a => a.options[0].price > this.minPrice && a.options[0].price < this.maxPrice))
    )
    .subscribe(item => console.log(item));
  }

  ngOnInit() {
    this.getCatalogGroupItems();
    //this.sortCatalogGroupItems();
  }

}
