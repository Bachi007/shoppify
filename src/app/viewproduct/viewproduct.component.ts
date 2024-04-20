import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent {

  constructor(private route:ActivatedRoute,private service:ProductService,private cart:CartService) { }

  productId:any;
  product:any;

  addtoCart(pro:any){
    this.cart.addItemtoCart(pro);
    alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.product = this.service.getProductById(this.productId);
  }

}
