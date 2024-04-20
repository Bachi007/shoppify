import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { TvComponent } from './tv/tv.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { CartComponent } from './cart/cart.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
      children:[
        {path:'home',component:HomeComponent},
        {path:'products',component:ProductsComponent},
        {path:'cart',component:CartComponent},
        {path:'view-product/:id',component:ViewproductComponent}
      ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'add',component:AddproductsComponent},
      {path:'products',component:ProductsComponent},
      {path:'mobile',component:MobileComponent},
      {path:'laptop',component:LaptopComponent},
      {path:'tv',component:TvComponent},
      {path:'manage',component:ManageProductComponent},
      {path:'cart',component:CartComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
