import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent {
  constructor(private service:ProductService){}

  products:any;

  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
      this.products=result;
      console.log(this.products);
    })
  }

}
