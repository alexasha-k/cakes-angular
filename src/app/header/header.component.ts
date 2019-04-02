import { Component, OnInit } from '@angular/core';

import { MainNavService } from '../main-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private mainNavService: MainNavService) { }

  mainNavLinks: MainNav[];

  showMainNav() {
    this.mainNavService.getMainNav()
      .subscribe(
        mainNavLinks => this.mainNavLinks = mainNavLinks,
        error => this.error = error
      );
  }

  phoneNumber: string;

  showPhoneNumber() {
    this.mainNavService.getPhoneNumber()
      .subscribe(
        phoneNumber => this.phoneNumber = phoneNumber,
        error => this.error = error
      );
  }


  ngOnInit() {
    this.showMainNav();
    this.showPhoneNumber();
  }

}
