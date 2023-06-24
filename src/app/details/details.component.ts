/* import { Component, OnInit } from '@angular/core';
import { Idishes } from '../Idishes';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  dish: IDishes = {} as IDishes;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
    alert("your Product Added To The Cart")
    this.cartService.addToCart(this.dish)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['indexFormRouting'];
      this.dish = dishes[this.index];

    });
  }
}
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { Idishes } from '../Idishes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
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