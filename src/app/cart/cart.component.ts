import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cart:CartService) { }
  totalprice:any;
  cartitems:any;
  cartlength:any;
 
  ngDoCheck(){
    this.cartlength=this.cart.getLength();
    this.totalprice=this.cart.getTotal();
  }
  ngOnInit(){ 
    this.cart.getItems().subscribe((result)=>{
      this.cartitems=result;
      console.log(this.cartitems);
    })
  }

}
