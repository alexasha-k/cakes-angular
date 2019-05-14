import { Component, OnInit } from '@angular/core';

import { CartService, CartItem } from '../../cart/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
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
