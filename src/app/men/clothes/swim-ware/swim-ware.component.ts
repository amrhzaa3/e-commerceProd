import { Component, OnInit } from '@angular/core';
import {ProductDetails} from '../../../ProductDtos/productDetails';
import {CarService2Service} from '../../../shared/car-service2.service';
// import {ProductDetails} from "../../../Market-component/market-card/market-card.component";

@Component({
  selector: 'app-swim-ware',
  templateUrl: './swim-ware.component.html',
  styleUrls: ['./swim-ware.component.css']
})
export class SwimWareComponent implements OnInit {
  myproduct: ProductDetails[];

  constructor( private simSware :CarService2Service) { }

  ngOnInit(): void {
   this.myproduct=this.simSware.getProduct();
  }

}
