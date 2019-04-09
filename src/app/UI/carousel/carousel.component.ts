import { Component, OnInit, Input, AfterViewInit, ContentChildren, Directive, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { CarouselDirective } from './carousel.directive';

@Directive({
  selector: '.carousel-slide'
})

export class GalleryItemElement {
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {

  @ContentChildren(CarouselDirective) items : QueryList<CarouselDirective>;
  @ViewChildren(GalleryItemElement, {read: ElementRef}) private itemElements : QueryList<ElementRef>;

  @Input() showArrows = true;

  private itemWidth: number;
  private currentSlide = 0;

  activeSlide : number = 0;


  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.itemElements)
    });
  }

}
