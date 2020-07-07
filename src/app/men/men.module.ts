import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenRoutingModule} from "./men-routing.module";
import {ClothesComponent} from "./clothes/clothes.component";
import {BagsComponent} from "./clothes/bags/bags.component";
import {JeansPantsComponent} from "./clothes/jeans-pants/jeans-pants.component";
import {PolosComponent} from "./clothes/polos/polos.component";
import {ShirtComponent} from "./clothes/shirt/shirt.component";
import {TShirtComponent} from "./clothes/t-shirt/t-shirt.component";
import {SwimWareComponent} from "./clothes/swim-ware/swim-ware.component";
import {TheMarketsidebarComponent} from "../Market-component/the-marketsidebar/the-marketsidebar.component";
import {MarketCardComponent} from "../Market-component/market-card/market-card.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SliderModule} from 'primeng/slider';
import{CardModule}from 'primeng/card';
import {RatingModule} from 'primeng/rating'
import {PaginationConfig} from "ngx-bootstrap/pagination";
import {CarService2Service} from "../shared/car-service2.service";
import {FormsModule} from "@angular/forms";
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    ClothesComponent,
    BagsComponent,
    JeansPantsComponent,
    PolosComponent,
    ShirtComponent,
    TShirtComponent,
    SwimWareComponent,
    MarketCardComponent,
    TheMarketsidebarComponent,
  ],
  imports: [
    CommonModule ,
    MenRoutingModule,
    SliderModule,
     NgbModule,
    CardModule ,
    RatingModule,
    FormsModule,
    ToastModule
  ],
  providers:[PaginationConfig,CarService2Service]
})
export class MenModule { }
