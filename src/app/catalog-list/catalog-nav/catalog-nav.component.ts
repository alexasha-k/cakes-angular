import { Component, OnInit } from '@angular/core';
import { trigger, query, stagger, style, animate, transition } from '@angular/animations';

import { CatalogGroups, MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-catalog-nav',
  templateUrl: './catalog-nav.component.html',
  styleUrls: ['./catalog-nav.component.scss'],
  animations: [
    trigger('showItem', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0, height: 0}),
          stagger(50, [
            animate('0.3s', style({height: '*'})),
            animate('0.5s', style({opacity: 1}))
          ])
        ])
      ])
    ])
  ]
})
export class CatalogNavComponent implements OnInit {
  catalogGroups: CatalogGroups[];

  constructor(
    private mainNavService: MainNavService
  ) { }

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
