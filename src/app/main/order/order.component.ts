import { Component, OnInit } from '@angular/core';

import { MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private mainNavService: MainNavService) { }

  cakeFillings: CakeFillings[];
  showCatalogGroups() {
    this.mainNavService.getCakeFillings()
      .subscribe(
        cakeFillings => this.cakeFillings = cakeFillings,
        error => this.error = error
      );
  }

  ngOnInit() {
    this.showCatalogGroups();
  }

}
