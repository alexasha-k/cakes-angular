import { Component, OnInit } from '@angular/core';
import { scrollAnimation } from '../animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    scrollAnimation
  ]
})
export class MainComponent implements OnInit {

  constructor() { }



  ngOnInit() {

  }
}
