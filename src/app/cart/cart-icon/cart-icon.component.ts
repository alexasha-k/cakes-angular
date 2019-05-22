import { Component, OnInit } from '@angular/core';
import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state
} from '@angular/animations';

import { CartService, CartItem } from '../../cart/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
  animations: [
    trigger('slideRight', [
      state('in', style({transform: 'translate(0,0)'})),
      state('out', style({transform: 'translate(100%, 0)'})),
      transition('void => *', [
        style({transform: 'translate(100%, 0)'}),
        animate('350ms', style({transform: 'translate(0, 0)'}))
      ])
    ])
  ]
})
export class CartIconComponent implements OnInit {

  constructor(private cartService: CartService) { }

  itemsCount: number;
  itemsTotalPrice: number;

  showCartDetails() {
    const cartItems = this.cartService.getCartData();
    if (cartItems) {
      const order: CartItem[] = cartItems;
      this.itemsCount = order.length;
      const total = order.reduce((acc, val) => acc + val.price, 0);
      this.itemsTotalPrice = +total;
    }
  }

  ngOnInit() {
    this.showCartDetails();
    this.cartService.cartSubject.subscribe(() => {
      this.showCartDetails();
    })
  }

}
