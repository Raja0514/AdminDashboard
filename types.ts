
export type OrderItemType={
  name:string;
  photo:string;
  price:number;
  quantity:number;
  _id:string;

}

export type OrederType={
  name:string;
  address:string;
  city:string;
  country:string;
  state:string;
  pincode:number;
  status:"processing"|"Shipped"|"Delivered";
  subtotal:number;
  discount:number;
  shippingCharge:number;
  tax:number;
  total:number;
  orderItems:OrderItemType[];
  _id:string;
}