import { Component, OnInit } from '@angular/core';
// import {ProductDetails} from "../../../Market-component/market-card/market-card.component";
import {CarService2Service} from '../../../shared/car-service2.service';
import {ProductDetails} from '../../../ProductDtos/productDetails';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.css']
})
export class TShirtComponent implements OnInit {
  myproduct: ProductDetails[];

  constructor( private tShirtService :CarService2Service) { }

  ngOnInit(): void {
    debugger
   this.myproduct=this.tShirtService.getProduct();

  }

}
