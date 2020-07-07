import { Injectable } from '@angular/core';
import {ProductDetails} from '../ProductDtos/productDetails';
import {Observable} from "rxjs";
// import {ProductDetails} from '../Market-component/market-card/market-card.component';

@Injectable({
  providedIn: 'root'
})
export class CarService2Service {
  private _selectedProduct: ProductDetails;
//obs :Observable<ProductDetails[]>=new Observable<ProductDetails[]>();
  cartProducts: ProductDetails[] = [];
  // cartProducts$:Observable<ProductDetails[]>  = [];
  private newProduct = [
    {brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff"},
    {brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff"},
    {brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff"},
    {brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff"},
    {brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff"},
    {brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff"},
  ]
  ;
  private myproduct: ProductDetails[] = [
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: [
        'assets/clothesfolder/7w.jpg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',
      ],
      productId: 1,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothesfolder/wome2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',],
      productId: 2,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 8,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothesfolder/2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',],
      productId: 3,
      productDescription:'Cotton T-shirt h&m small',

    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothesfolder/1.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 4 ,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothesfolder/9.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 5,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 8,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothesfolder/7w.jpg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 6,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothesfolder/latest.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 7,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothesfolder/lwomen.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 8,
      productDescription:'Cotton T-shirt h&m small'
    }, {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 9,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 10,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 8,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 11,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg'
        , 'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 12,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 12,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 8,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 13,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 14,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 15,
      productDescription:'Cotton T-shirt h&m small'
    }, {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 16,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 17,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 8,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 18,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 19,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 87,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 8,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 456,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 6778,
      productDescription:'Cotton T-shirt h&m small'
    },
    {
      price: 3,
      brand: "Guchi",
      size: ["xl"],
      color: ['orange'],
      image: ['assets/clothes2.jpeg',
        'assets/clothesfolder/5w.jpg',
        'assets/clothesfolder/10w.jpg',
        'assets/clothesfolder/1.jpeg',]
      , productId: 20,
      productDescription:'Cotton T-shirt h&m small'
    },


  ];

  constructor() {

  }

  obs$:Observable<any>=new Observable<any>(observer=>{
    observer.next(this.cartProducts);
  });
  getObservalItem() :Observable<any>{
    return this.obs$;
}
  getSelectedProduct(): any {
    return this._selectedProduct;
  }

  setSelectedProduct(value: any) {
    this._selectedProduct = value;
  }

  getProduct() {
    return this.myproduct;
  }

  getCarusalProduct() {
    return this.newProduct;
  }

  getCartItem(){
    return this.cartProducts;
    // return this.obs$;
  }

  setCartItem(product: ProductDetails) {
    this.cartProducts.push(product);
 // let obs$ =new Observable<ProductDetails[]>(observer=>{
 //    //   observer.next(this.cartProducts$.pipe(product))
 //    //
 //    // })
 //  }
  }
}



