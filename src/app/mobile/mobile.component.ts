import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent {
  constructor(private service:ProductService){}

  products:any;

  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
      this.products=result;
      console.log(this.products);
    })
  }

}
