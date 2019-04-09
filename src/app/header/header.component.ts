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

  isMainNavOpened: boolean = false;

  mainNavToggle(): void {
    this.isMainNavOpened = !this.isMainNavOpened;
  }

  scrollToElement(el): void {
      console.log(el);
      el = '#'+el;
      el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }


  ngOnInit() {
    this.showMainNav();
    this.showPhoneNumber();
  }

}
