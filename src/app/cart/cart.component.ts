import { Component, OnInit } from '@angular/core';
import { Idishes } from '../Idishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cart: Idishes[] = [];

  total: number = 0;
  discount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
    this.discount = this.cartService.calculateDiscount();
  }

}
/* 
export class DetailsComponent implements OnInit {
  dish: Idishes = {} as Idishes;
  index: number = 0;


  constructor(private route: ActivatedRoute, private cartService: CartService) {

  }
  addToCart() {
    alert("added to the card")
    this.cartService.addToCart(this.dish)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['indexFromRouting'];
      this.dish = dishes[this.index]
    });
  }
}
*/