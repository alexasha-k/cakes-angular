import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-catalog-items',
  templateUrl: './catalog-items.component.html',
  styleUrls: ['./catalog-items.component.scss']
})
export class CatalogItemsComponent implements OnInit {

  @Input() catalogGroup : СatalogGroups;
  @Input() showListView : boolean;

  constructor(
    private route: ActivatedRoute,
    private mainNavService: MainNavService
  ) { }

  getCatalogList(): void {
    const category = +this.route.snapshot.paramMap.get('id');
    this.mainNavService.getCatalogGroup(category)
      .subscribe(
        catalogGroup => this.catalogGroup = catalogGroup,
        error => this.error = error
      );
  }

  ngOnInit() {
    this.getCatalogList();
    console.log(this.showListView)
  }

}
