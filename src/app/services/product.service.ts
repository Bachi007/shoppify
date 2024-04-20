import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productList: product[] = [
    { 
      productId: 1,
      productName: 'Laptop',
      productCompany: 'Dell',
      productPrice: 50000,
      productDescription: 'Dell Laptop',
      productImage: 'https://images-cdn.ubuy.co.in/64fc66ff63b1bf384b17d873-dell-inspiron-15-touchscreen-laptop.jpg',
      productEdit: false
  },
  { 
      productId: 2,
      productName: 'Laptop',
      productCompany: 'HP',
      productPrice: 60000,
      productDescription: 'HP Laptop',
      productImage: 'https://images-cdn.ubuy.co.in/64fc66ff63b1bf384b17d873-dell-inspiron-15-touchscreen-laptop.jpg',
      productEdit: false
  },
  { 
      productId: 3,
      productName: 'Laptop',
      productCompany: 'Lenovo',
      productPrice: 55000,
      productDescription: 'Lenovo Laptop',
      productImage: 'https://images-cdn.ubuy.co.in/64fc66ff63b1bf384b17d873-dell-inspiron-15-touchscreen-laptop.jpg',
      productEdit: false
  },
  { 
      productId: 4,
      productName: 'Laptop',
      productCompany: 'Asus',
      productPrice: 48000,
      productDescription: 'Asus Laptop',
      productImage: 'https://images-cdn.ubuy.co.in/64fc66ff63b1bf384b17d873-dell-inspiron-15-touchscreen-laptop.jpg',
      productEdit: false
  },
  { 
      productId: 5,
      productName: 'Laptop',
      productCompany: 'Apple',
      productPrice: 80000,
      productDescription: 'Apple Laptop',
      productImage: 'https://images-cdn.ubuy.co.in/64fc66ff63b1bf384b17d873-dell-inspiron-15-touchscreen-laptop.jpg',
      productEdit: false
  },
  // Mobiles
  { 
      productId: 6,
      productName: 'Mobile',
      productCompany: 'Samsung',
      productPrice: 30000,
      productDescription: 'Samsung Mobile',
      productImage: 'https://d2xamzlzrdbdbn.cloudfront.net/products/cd9d3e3d-33ee-4c5f-bd74-a746668fd061_416x416.jpg',
      productEdit: false
  },
  { 
      productId: 7,
      productName: 'Mobile',
      productCompany: 'Apple',
      productPrice: 70000,
      productDescription: 'Apple Mobile',
      productImage: 'https://d2xamzlzrdbdbn.cloudfront.net/products/cd9d3e3d-33ee-4c5f-bd74-a746668fd061_416x416.jpg',
      productEdit: false
  },
  { 
      productId: 8,
      productName: 'Mobile',
      productCompany: 'Xiaomi',
      productPrice: 20000,
      productDescription: 'Xiaomi Mobile',
      productImage: 'https://d2xamzlzrdbdbn.cloudfront.net/products/cd9d3e3d-33ee-4c5f-bd74-a746668fd061_416x416.jpg',
      productEdit: false
  },
  { 
      productId: 9,
      productName: 'Mobile',
      productCompany: 'OnePlus',
      productPrice: 40000,
      productDescription: 'OnePlus Mobile',
      productImage: 'https://d2xamzlzrdbdbn.cloudfront.net/products/cd9d3e3d-33ee-4c5f-bd74-a746668fd061_416x416.jpg',
      productEdit: false
  },
  { 
      productId: 10,
      productName: 'Mobile',
      productCompany: 'Google',
      productPrice: 60000,
      productDescription: 'Google Mobile',
      productImage: 'https://d2xamzlzrdbdbn.cloudfront.net/products/cd9d3e3d-33ee-4c5f-bd74-a746668fd061_416x416.jpg',
      productEdit: false
  },
  // TVs
  { 
      productId: 11,
      productName: 'TV',
      productCompany: 'Sony',
      productPrice: 80000,
      productDescription: 'Sony TV',
      productImage: 'https://www.reliancedigital.in/medias/OnePlus-65U1S-Television-492338515-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzODEzNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI0L2hkYy85NTY4NDA4MzcxMjMwLmpwZ3w0YzI5OGZkN2U0OWYyNTlmMTllYWY3NDIyMmVlMDE0NjZkYmVjYjcwYTMxYTQ0YjJiMzZlODU1N2NmZDE2ZGZi',
      productEdit: false
  },
  { 
      productId: 12,
      productName: 'TV',
      productCompany: 'LG',
      productPrice: 70000,
      productDescription: 'LG TV',
      productImage: 'https://www.reliancedigital.in/medias/OnePlus-65U1S-Television-492338515-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzODEzNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI0L2hkYy85NTY4NDA4MzcxMjMwLmpwZ3w0YzI5OGZkN2U0OWYyNTlmMTllYWY3NDIyMmVlMDE0NjZkYmVjYjcwYTMxYTQ0YjJiMzZlODU1N2NmZDE2ZGZi',
      productEdit: false
  },
  { 
      productId: 13,
      productName: 'TV',
      productCompany: 'Samsung',
      productPrice: 75000,
      productDescription: 'Samsung TV',
      productImage: 'https://www.reliancedigital.in/medias/OnePlus-65U1S-Television-492338515-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzODEzNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI0L2hkYy85NTY4NDA4MzcxMjMwLmpwZ3w0YzI5OGZkN2U0OWYyNTlmMTllYWY3NDIyMmVlMDE0NjZkYmVjYjcwYTMxYTQ0YjJiMzZlODU1N2NmZDE2ZGZi',
      productEdit: false
  },
  { 
      productId: 14,
      productName: 'TV',
      productCompany: 'Panasonic',
      productPrice: 60000,
      productDescription: 'Panasonic TV',
      productImage: 'https://www.reliancedigital.in/medias/OnePlus-65U1S-Television-492338515-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzODEzNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI0L2hkYy85NTY4NDA4MzcxMjMwLmpwZ3w0YzI5OGZkN2U0OWYyNTlmMTllYWY3NDIyMmVlMDE0NjZkYmVjYjcwYTMxYTQ0YjJiMzZlODU1N2NmZDE2ZGZi',
      productEdit: false
  },
  { 
      productId: 15,
      productName: 'TV',
      productCompany: 'Toshiba',
      productPrice: 55000,
      productDescription: 'Toshiba TV',
      productImage: 'https://www.reliancedigital.in/medias/OnePlus-65U1S-Television-492338515-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzODEzNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI0L2hkYy85NTY4NDA4MzcxMjMwLmpwZ3w0YzI5OGZkN2U0OWYyNTlmMTllYWY3NDIyMmVlMDE0NjZkYmVjYjcwYTMxYTQ0YjJiMzZlODU1N2NmZDE2ZGZi',
      productEdit: false
  }
  ]

  getProducts(){
    return of (this.productList);
  }

  getProductById(id:number){
    return this.productList.find(p=>p.productId==id);
  }

  addProduct(product: product){
    this.productList.push(product);
  }

  deleteProduct(prod:product){
    let res=this.productList.findIndex(p=>p.productId==prod.productId);
    this.productList.splice(res,1);
  }

  updateProduct(prod:product){
     let res=this.productList.findIndex(p=>p.productId==prod.productId);
    this.productList.splice(res,1,prod);
  }

}
