import { Component, OnInit } from '@angular/core';
import { IDishes } from '../Idishes';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: IDishes[] = dishes;

  constructor(private cartService: CartService) { }

  addToCart(id: number) {
    this.cartService.addCart(dishes[id]);
  }

  ngOnInit(): void {
  }

}