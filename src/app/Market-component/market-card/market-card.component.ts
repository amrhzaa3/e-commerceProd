import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import {CarService2Service} from '../../shared/car-service2.service';
import {ProductDetails} from '../../ProductDtos/productDetails';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-maket-card',
  templateUrl: './market-card.component.html',
  styleUrls: ['./maket-card.component.css']
})

export class MarketCardComponent implements OnInit {
@Input() myproduct:ProductDetails[];
  page=1;
  pageSize=8;
  currentprod: any;
  modalRef: BsModalRef;
  constructor( private route :Router,private marketService:CarService2Service,private modalService:BsModalService) {
  }
  ngOnInit(): void {

  }
  showproductdrtails(prod){
    this.currentprod=prod;
    this.marketService.setSelectedProduct(prod);
this.route.navigate(['products/',prod.productId]);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  addProductToCart(prod: ProductDetails) {
    this.marketService.setCartItem(prod);

  }
}
