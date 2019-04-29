import { Component, OnInit, HostListener } from '@angular/core';

import { MainNav, MainNavService } from '../main-nav.service';

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
        mainNavLinks => this.mainNavLinks = mainNavLinks
      );
  }

  phoneNumber: string;
  showPhoneNumber() {
    this.mainNavService.getPhoneNumber()
      .subscribe(
        phoneNumber => this.phoneNumber = phoneNumber
      );
  }

  isMainNavOpened: boolean = false;
  mainNavToggle(): void {
    this.isMainNavOpened = !this.isMainNavOpened;
  }

  isStickHeader: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if (window.scrollY > 103) {
      this.isStickHeader = true;
    } else {
      this.isStickHeader = false;
    }
  }



  ngOnInit() {
    this.showMainNav();
    this.showPhoneNumber();
  }

}
