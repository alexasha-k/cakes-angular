import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { map, groupBy, mergeMap, reduce, pluck, mergeAll, count } from 'rxjs/operators';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  options?: any[];
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  order: any[] = this.getCartData() || [];
  cartSubject : Subject<any> = new Subject();
  orderList: any[] = [];

  addToCart(item: CartItem) {
    const cartItem = item;
    if (this.order.filter(el => el.id === item.id).length) {
      let ind;
      this.order.filter((it, i) => {
        if (it.id == item.id) {
          return ind = i
        }
      });
      cartItem.quantity = this.order[ind].quantity + 1
      this.order[ind] = cartItem;
      localStorage.setItem('cakeShopOrder', JSON.stringify(this.order));
      this.cartSubject.next(this.order);
    } else {
      cartItem.quantity = 1;
      this.order.push(cartItem);
      localStorage.setItem('cakeShopOrder', JSON.stringify(this.order));
      this.cartSubject.next(this.order);
    }
  }

  removeFromCart(item) {
    this.order.splice(item, 1)
    localStorage.setItem('cakeShopOrder', JSON.stringify(this.order));
    this.cartSubject.next(this.order);
  }

  clearCart() {
    localStorage.removeItem('cakeShopOrder');
    this.cartSubject.next(this.order);
  }

  changeItemQuantity(val, item) {
    const listItem = this.order[item];
    listItem.quantity = val;
    localStorage.setItem('cakeShopOrder', JSON.stringify(this.order));
    this.cartSubject.next(this.order);
  }

  getCartData(): any[] | null {
    const savedOrder = JSON.parse(localStorage.getItem('cakeShopOrder'));
    return savedOrder;
  }


}
