import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {

  productId:any;
  productName:any;
  productPrice:any;
  productCompany:any;
  productDescription:any;
  productImage:any;
  newproduct:any;
  constructor(private service:ProductService,private router:Router) { }
  addProduct(){
    this.newproduct={
      productId:this.productId,
      productName:this.productName,
      productPrice:this.productPrice,
      productCompany:this.productCompany,
      productDescription:this.productDescription,
      productImage:this.productImage
    }     
    this.service.addProduct(this.newproduct);
    Swal.fire({
      title: "Success",
      text: "Product added successfully",
      icon: "success"
    });
    this.router.navigateByUrl("/admin/products");
  }


}
