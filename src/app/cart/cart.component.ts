import {Component, OnDestroy, OnInit} from '@angular/core';
// import {ProductDetails} from "../Market-component/market-card/market-card.component";
import {CarService2Service} from "../shared/car-service2.service";
import {ProductDetails} from "../ProductDtos/productDetails";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {
  // cardd:Array<any>;
  cartItems:ProductDetails[]=[];
  totalCash: number=0;
  Quantity: number;
  constructor(private cartservice :CarService2Service) { }
  ngOnInit(): void {
 this.getCartItem();
  }
  // f(){
  //  let x  =  this.cartservice.getSelectedProduct()
  //   this.cartItems.push(x);
  // }
  getCartItem(){
    this.cartservice.obs$.subscribe(item=>{
      this.cartItems=item
      item.forEach(prod=>{
        this.totalCash +=prod.price;

      })
    });

  }
/*   function to update the Item Quantity related to the user                                      */
setItemQUantity(){

}
 totalPrice(){



 }
 ngOnDestroy() {

 }

}
