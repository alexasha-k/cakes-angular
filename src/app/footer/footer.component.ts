import { Component, OnInit } from '@angular/core';

import { MainNav, MainNavService } from '../main-nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  constructor(private mainNavService: MainNavService) { }

  mainNavLinks: MainNav[];

  showMainNav() {
    this.mainNavService.getMainNav()
      .subscribe(
        mainNavLinks => this.mainNavLinks = mainNavLinks
      );
  }


  ngOnInit() {
    this.showMainNav();
  }

}
