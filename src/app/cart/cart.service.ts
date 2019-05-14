import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  options?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  order: any[] = this.getCartData() || [];
  cartSubject : Subject<any> = new Subject();

  addToCart(item: CartItem) {
    this.order.push(item);
    localStorage.setItem('cakeShopOrder', JSON.stringify(this.order));
    this.cartSubject.next(this.order);
  }

  removeFromCart(item) {
    this.order.splice(item, 1)
    localStorage.setItem('cakeShopOrder', JSON.stringify(this.order));
    this.cartSubject.next(this.order);
  }

  getCartData(): any[] | null {
    const savedOrder = JSON.parse(localStorage.getItem('cakeShopOrder'));
    return savedOrder;
  }


}
