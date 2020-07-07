import { NgModule } from '@angular/core';
import { Routes,RouterModule} from "@angular/router";
import {MenComponent} from "./men.component";
import {TShirtComponent} from "./clothes/t-shirt/t-shirt.component";
import {SwimWareComponent} from "./clothes/swim-ware/swim-ware.component";
import {JeansPantsComponent} from "./clothes/jeans-pants/jeans-pants.component";
import {ShirtComponent} from "./clothes/shirt/shirt.component";
import {ClothesComponent} from "./clothes/clothes.component";
const routs :Routes=[
  {path :'men' ,component:MenComponent,
  children:[
    {path:'T-shirt',component :TShirtComponent},
    {path:'swimware',component :SwimWareComponent},
    {path:'jeans&pants',component :JeansPantsComponent},
    {path:'shirt',component :ShirtComponent},
    {path:'polos',component :ShirtComponent},
  ]},
  {path :'clothes-collection' ,component:ClothesComponent},
]


@NgModule({

  imports: [RouterModule.forChild(routs)],
  exports:[RouterModule]

})
export class MenRoutingModule { }
