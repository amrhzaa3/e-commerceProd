import { Component, OnInit } from '@angular/core';
//import {ProductDetails} from "../../../Market-component/market-card/market-card.component";
import {CarService2Service} from '../../../shared/car-service2.service';
import {ProductDetails} from '../../../ProductDtos/productDetails';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {
  myproduct: ProductDetails[];

  constructor( private simSware :CarService2Service) { }

  ngOnInit(): void {
    this.myproduct=this.simSware.getProduct();
  }

}
