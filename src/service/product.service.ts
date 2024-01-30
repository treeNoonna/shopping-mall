import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ProductModel } from "../model/product.model";
import { BehaviorSubject, Observable, first, map, tap } from "rxjs";

@Injectable({
  providedIn :'root'
})

//데이터가 넘어오면 service에서 가져옴.
//Service 간의 계층이 없으면 안 됨.

export class ProductService {

  http = inject(HttpClient);
  products$ = new BehaviorSubject<ProductModel[]>([]);

  //interface 에 맞춰서 가져오고 return 형을 명시해줌
  getProducts() {
    this.http.get<ProductModel[]>('/assets/db.json').pipe(
      first(),
      tap(list => {
        this.products$.next(list);
      })
    ).subscribe();
  }


  getProduct(id:number) : Observable<ProductModel | undefined> {
    return this.products$.pipe(
      first(),
      map((products)=> {
        //find가 못 찾으면 undefined를 뱉음
        const exist = products.find(product=> Number(product.id) === Number(id));
        return exist ?? undefined;
      })
    )    ;
  }
}
