import { Directive, AfterViewInit, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr = 'assets/images/icon-gift.png';
  @Input() src: string;

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
    this.srcAttr = this.src;
  }

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

}
