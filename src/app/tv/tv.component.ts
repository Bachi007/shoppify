import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent {
  constructor(private service:ProductService){}

  products:any;

  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
      this.products=result;
      console.log(this.products);
    })
  }

}
