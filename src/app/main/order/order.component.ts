import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import { CakeDecorating, CakeFillings, CakeSizes, MainNavService } from '../../main-nav.service';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(
    private mainNavService: MainNavService,
    public dialog: MatDialog) { }

  openDialog(): void {
    if (!this.cakeFillingsSelected || !this.cakeSizesSelected || !this.cakeDecoratingSelected) return
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '600px',
      data: {
        cakeFillingsSelected: this.cakeFillingsSelected,
        cakeSizesSelected: this.cakeSizesSelected,
        cakeDecoratingSelected: this.cakeDecoratingSelected
      }
    });
  }

  cakeFillings: CakeFillings[];
  showCakeFillings() {
    this.mainNavService.getCakeFillings()
      .subscribe(
        cakeFillings => this.cakeFillings = cakeFillings
      );
  }

  cakeSizes: CakeSizes[];
  showCakeSizes() {
    this.mainNavService.getCakeSizes()
      .subscribe(
        cakeSizes => this.cakeSizes = cakeSizes
      );
  }

  cakeDecorating: CakeDecorating[];
  showCakeDecorating() {
    this.mainNavService.getCakeDecorating()
      .subscribe(
        cakeDecorating => this.cakeDecorating = cakeDecorating);
  }

  cakeFillingsSelected: string;
  cakeSizesSelected: string;
  cakeDecoratingSelected: string;

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
