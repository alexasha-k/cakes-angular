import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollPosition]'
})
export class ScrollPositionDirective {

  constructor(public el: ElementRef) { }

  state: string = 'hidden';

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      if (document.querySelector('html').classList.contains('cdk-global-scrollblock')) {return}
      const elem = this.el.nativeElement;
      const componentPosition = elem.offsetTop
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      if (scrollPosition >= componentPosition - windowHeight/2) {
        elem.classList.add('scroll-animation-visible')
      } else if (scrollPosition <= componentPosition - windowHeight - 200) {
        if (elem.classList.contains('scroll-animation-visible')) {elem.classList.remove('scroll-animation-visible')}
      }
    }
}
