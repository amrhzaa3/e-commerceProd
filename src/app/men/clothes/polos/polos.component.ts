import { Component, OnInit } from '@angular/core';
//import {ProductDetails} from "../../../Market-component/market-card/market-card.component";
import {CarService2Service} from '../../../shared/car-service2.service';
import {ProductDetails} from '../../../ProductDtos/productDetails';

@Component({
  selector: 'app-polos',
  templateUrl: './polos.component.html',
  styleUrls: ['./polos.component.css']
})
export class PolosComponent implements OnInit {

  myproduct: ProductDetails[];
  constructor( private tShirtService:CarService2Service) { }

  ngOnInit(): void {
    this.myproduct=this.tShirtService.getProduct();
  }

}
