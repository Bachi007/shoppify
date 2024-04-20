import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { product } from '../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private service:ProductService, private cart:CartService,private router:Router){}

  products:any;

  addtoCart(pro:product){
    this.cart.addItemtoCart(pro);
    alert('Your product has been added to the cart!');
  }



  viewProduct(proId:any){
  
    this.router.navigate(['/user/view-product',proId]);
  }

  filteredProducts: any[] = [];
  searchQuery: string = '';
  searchProducts() {
    if (this.searchQuery.trim() === '') {
      this.filteredProducts = this.products;
    } else {
      const lowercaseQuery = this.searchQuery.toLowerCase();
      this.filteredProducts = this.products.filter((product:any) =>
        product.productName.toLowerCase().includes(lowercaseQuery) ||
        product.productCompany.toLowerCase().includes(lowercaseQuery)
      );
    }
  }
  
  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
      this.products=result;
      this.filteredProducts = this.products;
      console.log(this.products);
    })
  }


}

