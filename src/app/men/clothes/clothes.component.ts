import { Component, OnInit } from '@angular/core';
// import {ProductDetails} from "../../Market-component/market-card/market-card.component";
import {CarService2Service} from '../../shared/car-service2.service';
import {ProductDetails} from '../../ProductDtos/productDetails';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  myproduct: ProductDetails[];

  constructor( private simSware :CarService2Service) { }

  ngOnInit(): void {
    this.myproduct=this.simSware.getProduct();
  }

}
