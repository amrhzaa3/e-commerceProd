export interface ProductDetails {
  price:number;
  brand :string;
  size : string[];
  color : string[];
  image: string[];
  productId: number;
  productDescription:string;
  availableQuantity?:number;
  cartQuantity?:number;
}
