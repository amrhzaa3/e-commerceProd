import { Component, OnInit } from '@angular/core';
import {ProductDetails} from '../../../ProductDtos/productDetails';
import {CarService2Service} from '../../../shared/car-service2.service';


@Component({
  selector: 'app-jeans-pants',
  templateUrl: './jeans-pants.component.html',
  styleUrls: ['./jeans-pants.component.css']
})
export class JeansPantsComponent implements OnInit {
  myproduct: ProductDetails[];
  constructor( private tShirtService:CarService2Service) { }

  ngOnInit(): void {
    this.myproduct=this.tShirtService.getProduct();
  }

}
