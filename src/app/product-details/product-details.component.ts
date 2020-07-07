import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {CarService2Service} from '../shared/car-service2.service';
import {ProductDetails} from '../ProductDtos/productDetails';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ImagSliced:any;
product:ProductDetails;

  constructor(private route :Router,private caRTSERVICE :CarService2Service) {
  }
  ngOnInit(): void {
    debugger
   this.getCarddata();
  }
  pushTocart(prod: ProductDetails) {
    debugger;
    this.caRTSERVICE.setSelectedProduct(prod);
    this.route.navigate(['Cart']);
  }
  getCarddata(){
   this.product= this.caRTSERVICE.getSelectedProduct();
  }
  setImage(imag: any) {
    debugger
    this.ImagSliced = imag.src.slice(22);

  }
}
