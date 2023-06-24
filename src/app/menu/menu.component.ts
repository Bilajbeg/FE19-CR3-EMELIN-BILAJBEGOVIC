import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { Idishes } from '../Idishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Array<Idishes> = dishes;

  dish: Idishes = {} as Idishes;
  index: number = 0;


  constructor(private route: ActivatedRoute, private cartService: CartService) {

  }
  addToCart(dish: Idishes) {
    alert("added to the card")
    this.cartService.addToCart(dish)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['indexFromRouting'];
      this.dish = this.dishes[this.index]
    });
  }


}



