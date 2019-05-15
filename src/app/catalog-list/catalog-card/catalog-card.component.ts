import { Component, Input, OnInit } from '@angular/core';
import { trigger, query, stagger, style, animate, transition } from '@angular/animations';

import { CartService, CartItem } from '../../cart/cart.service';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss'],
  animations: [
    trigger('showMe', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.5s', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('0.15s', style({opacity: 0}))
      ])
    ])
  ]
})
export class CatalogCardComponent implements OnInit {

  @Input() item;
  selectedPriceId = 0;

  constructor(private cartService: CartService) { }

  changePrice(evt) {
    if (evt.target.value !== this.selectedPriceId) {
      this.selectedPriceId = evt.target.value;
    }
  }

  addItemToCart(item, opt?) {
    const option = opt || 0;
    const itemToCart: CartItem = {
      id: `${item.id}-${option}`,
      name: item.name,
      price: item.options[option].price,
      options: [item.options[option].title]
    }
    this.cartService.addToCart(itemToCart);
  }

  ngOnInit() {
  }

}
