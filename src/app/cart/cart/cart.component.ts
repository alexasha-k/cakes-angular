import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CartService, CartItem } from '../../cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  itemsTotalPrice: number;
  goToOrder: boolean = false;
  orderSuccess: boolean = false;

  showCartItems() {
    if (this.cartService.getCartData()) {
      this.cartItems = this.cartService.getCartData();
      const total = this.cartItems.reduce((acc, val) => acc + val.price*val.quantity, 0);
      this.itemsTotalPrice = +total;
    }
  }

  deleteCartItem(item) {
    this.cartService.removeFromCart(item);
  }

  setItemQuantity(evt) {
    const value = evt.target.value;
    const itemId = evt.target.attributes['data-index'].value
    this.cartService.changeItemQuantity(value, itemId);
  }

  emptyCart() {
    this.cartService.clearCart();
  }

  orderForm = this.fb.group({
    cake: [JSON.stringify(this.cartService.getCartData())],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    message: ['']
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.orderForm.valid) {
      console.warn(this.orderForm.getRawValue());
      this.orderSuccess = true;
      this.emptyCart();
    }
  }

  constructor(private cartService: CartService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.showCartItems();
    this.cartService.cartSubject.subscribe(() => {
      this.showCartItems();
    })
  }

}
