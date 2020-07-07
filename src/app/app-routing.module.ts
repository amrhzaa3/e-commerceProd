import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterationComponent} from "./registeration/registeration.component";
import {MenComponent} from "./men/men.component";
import {ForGirlComponent} from "./for-girl/for-girl.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path:'',component :HomeComponent ,pathMatch:'full'},
  {path:'signIn' ,component: RegisterationComponent},
  {path :'girl',component:ForGirlComponent},
  {path : 'men', loadChildren:()=>import('./men/men.module').then(m=>m.MenModule) },
    { path :'products/:productId' ,component:ProductDetailsComponent},
  { path:'Cart' ,component:CartComponent}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
