import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn:'root'
})
export class CartService {
  items=[];

  addToCart(product){
      this.items.push(product);
  }

  clearCart(){
    this.items=[];
  }

  getItems(){
    return this.items;
  }
  constructor(
    private http:HttpClient
  ) { }

  getShippingPrice(){
    return this.http.get('assets/shipping.json');
  }
}