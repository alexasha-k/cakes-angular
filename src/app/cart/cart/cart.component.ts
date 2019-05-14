import { Component, OnInit } from '@angular/core';

import { CartService, CartItem } from '../../cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  itemsTotalPrice: number;

  showCartItems() {
    this.cartItems = this.cartService.getCartData();
    const total = this.cartItems.reduce((acc, val) => acc + val.price, 0);
    this.itemsTotalPrice = +total;
  }

  deleteCartItem(item) {
    this.cartService.removeFromCart(item);
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.showCartItems();
    this.cartService.cartSubject.subscribe(() => {
      this.showCartItems();
    })
  }

}
