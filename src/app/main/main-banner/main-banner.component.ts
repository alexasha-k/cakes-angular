import { Component, OnInit } from '@angular/core';
import { trigger, query, stagger, group, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
  animations: [
    trigger('bannerAnimation', [
      transition('void => *', [
        query('h1', [
          style({opacity: 0, transform: 'translate(0, -30px)'}),
        ]),
        query('.subtitle', [
          style({opacity: 0, transform: 'translate(0, -20px)'}),
        ]),
        query('.btn', [
          style({opacity: 0}),
        ]),
        query('.banner-advantages', style({opacity: 0, transform: 'translate(0,60px)'})),

        query('h1', [
          animate('300ms ease', style({opacity: 1, transform: 'none'}))
        ]),
        query('.subtitle', [
          animate('300ms ease', style({opacity: 1, transform: 'none'}))
        ]),
        query('.btn', [
          animate('300ms ease', style({opacity: 1}))
        ]),
        query('.banner-advantages', [
          animate('500ms ease', style({opacity: 1, transform: 'none'}))
        ]),
      ])
    ])
  ]
})
export class MainBannerComponent implements OnInit {

  constructor() { }

  title = 'Speciality cake';
  subtitle = 'home made';

  ngOnInit() {
  }

}
