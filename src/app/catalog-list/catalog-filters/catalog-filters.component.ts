import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MinMaxPrice } from '../../main-nav.service';

@Component({
  selector: 'app-catalog-filters',
  templateUrl: './catalog-filters.component.html',
  styleUrls: ['./catalog-filters.component.scss']
})

export class CatalogFiltersComponent implements OnInit {

  @Input() maxPrice : number;
  @Input() minPrice : number;

  @Output() changeMinMaxPrice = new EventEmitter<MinMaxPrice>();

  onModelChange(event): void {
    let price: MinMaxPrice = { maxPrice: 0, minPrice: 0};
    price.maxPrice = this.maxPrice;
    price.minPrice = this.minPrice;
    this.changeMinMaxPrice.emit(price);
  }

  constructor() { }

  ngOnInit() {
  }

}
