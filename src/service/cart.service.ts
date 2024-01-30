import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem : ProductModel[] = [];

  add(item: ProductModel){

    const isExist = this.cartItem.some(cart => cart.id === item.id);

    if(isExist){
      this.cartItem = this.cartItem.map(cart => {
        if(cart.id === item.id){
          return {
            ...cart,
            quantity : cart.quantity + 1
          }
        }
        return cart
      })
    } else {
      this.cartItem.push(item)
    }
  }


  remove(itemId: number){

      this.cartItem = this.cartItem.map(cart => {
      if(cart.id === itemId){
        return {
          ...cart,
          quantity : cart.quantity - 1 //0일 때는 안보여줌
        }
      }
      return cart;
    })
    }
  }

