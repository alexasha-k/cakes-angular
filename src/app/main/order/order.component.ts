import { Component, OnInit } from '@angular/core';

import { MainNavService } from '../../main-nav.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private mainNavService: MainNavService) { }

  cakeFillings: CakeFillings[];
  showCakeFillings() {
    this.mainNavService.getCakeFillings()
      .subscribe(
        cakeFillings => this.cakeFillings = cakeFillings,
        error => this.error = error
      );
  }

  cakeSizes: CakeSizes[];
  showCakeSizes() {
    this.mainNavService.getCakeSizes()
      .subscribe(
        cakeSizes => this.cakeSizes = cakeSizes,
        error => this.error = error
      );
  }

  cakeDecorating: CakeDecorating[];
  showCakeDecorating() {
    this.mainNavService.getCakeDecorating()
      .subscribe(
        cakeDecorating => this.cakeDecorating = cakeDecorating,
        error => this.error = error
      );
  }

  cakeFillingsSelected: string = "Choose filling";
  cakeSizesSelected: string = "Choose size";
  cakeDecoratingSelected: string = "Choose decorating";

  setCakeFillings(cakeFillingsSelected): void {
    this.cakeFillingsSelected = cakeFillingsSelected.nameRus;
  }

  setCakeSizes(cakeSizesSelected): void {
    this.cakeSizesSelected = cakeSizesSelected.size + "kg";
  }

  setCakeDecoratings(cakeDecoratingSelected): void {
    this.cakeDecoratingSelected = cakeDecoratingSelected.nameRus;
  }

  config: SwiperOptions = {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 30
      };


  ngOnInit() {
    this.showCakeFillings();
    this.showCakeSizes();
    this.showCakeDecorating();
  }

}
