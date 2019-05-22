import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, query, stagger, state, style, animate, transition } from '@angular/animations';

import { MainNav, MainNavService } from '../main-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({height: 0})),
      transition('* => open', [
        query('@showHideChild', [
          style({transform: 'translateY(-10px) scale(1,0)'}),
          stagger(100, [
            animate('0.3s', style({
              transform: 'translateY(0) scale(1,1)'
            }))
          ])
        ], {optional: true})
      ]),
      transition('* => closed', [
        query('@showHideChild', [
          stagger(-100, [
            animate('0.3s', style({
              transform: 'translateY(-10px) scale(1,0)'
            }))
          ])
        ], {optional: true})
      ])
    ]),
    trigger('showHideChild', [
      state('closed', style({transform: 'translateY(-10px) scale(1,0)'})),
      transition('open => closed', [animate('0.3s')])
    ])
  ]
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

  isMainNavOpened: boolean = (window.innerWidth < 1200) ? false : true;
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
