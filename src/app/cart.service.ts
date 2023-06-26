import { Injectable } from '@angular/core';
import { Idishes } from './Idishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  cart: Idishes[] = [];
  constructor() { }
  addToCart(obj: Idishes) {
    this.cart.push(obj);
  }
  getCart() {
    return this.cart
  }

  clearCart() {
    this.cart = [];
  }

  calculateTotal() {
    let total: number = 0;
    for (let val of this.cart) {
      total = total + val.price;
    }
    return total;
  }

  calculateDiscount() {
    let discount: number = 0;
    let total: number = this.calculateTotal();
    discount = total + (total * 0.1);
    return discount;
  }

}



