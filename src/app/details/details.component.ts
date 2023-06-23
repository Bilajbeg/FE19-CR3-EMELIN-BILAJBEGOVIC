import { Component } from '@angular/core';
import { IDishes } from '../Idishes';
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
    this.cartService.addCart(this.dish)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['indexFormRouting'];
      this.dish = dishes[this.index];
      console.log(this.index);

    });
  }
}
