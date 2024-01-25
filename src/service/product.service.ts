import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ProductModel } from "../model/product.model";
import { Observable, first, map, tap } from "rxjs";

@Injectable({
  providedIn :'root'
})
//데이터가 넘어오면 service에서 가져옴

export class ProductService {

  http = inject(HttpClient);
  productList : ProductModel[] = [];

  //interface 에 맞춰서 가져오고 return 형을 명시해줌
  getProducts() : Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('/assets/db.json');
  }


  getProduct(id:number) : Observable<ProductModel | undefined> {
    return this.getProducts().pipe(
      first(),
      map((products)=> {
        //find가 못 찾으면 undefined를 뱉음
        const exist = products.find(product=> product.id === id);
        return exist ?? undefined;
      })
    );
  }
}
