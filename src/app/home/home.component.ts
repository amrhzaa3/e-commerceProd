import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {MegaMenuModule} from 'primeng/megamenu';
 import {MegaMenuItem, MenuItem} from "primeng";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SplitButtonModule} from 'primeng/splitbutton';
import {BehaviorSubject} from "rxjs";
import {ActivatedRoute,Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import { CarService2Service } from '../shared/car-service2.service';
import {ProductDetails} from '../ProductDtos/productDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carusalData: any[];

  responsiveOptions;

  @Input() showCaurosal: boolean=true;
  mobile: boolean;
  constructor(private route: Router,private carService: CarService2Service) {
  //   this.responsiveOptions = [
  //     {
  //         breakpoint: '1024px',
  //         numVisible: 3,
  //         numScroll: 3
  //     },
  //     {
  //         breakpoint: '768px',
  //         numVisible: 2,
  //         numScroll: 2
  //     },
  //     {
  //         breakpoint: '560px',
  //         numVisible: 1,
  //         numScroll: 1
  //     }
  // ];

  if (window.screen.width <= 500) { // 768px portrait
    this.mobile = true;
  }
  }
  singIn:MenuItem[];
  ngOnInit() {
    this.carusalData= this.carService.getCarusalProduct();

  }
}
