import { Directive, AfterViewInit, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appLazyLoadBackground]'
})
export class LazyLoadBackgroundDirective implements AfterViewInit {
  //@HostBinding('attr.dataBg') srcAttr = 'assets/images/icon-gift.png';
  @Input() dataBg: string;

  constructor(private el: ElementRef) { }

  canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  loadImage() {
    this.el.nativeElement.style.backgroundImage = `url(${this.dataBg})`
  }

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }
}
