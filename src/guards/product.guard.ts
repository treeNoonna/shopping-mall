import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../service/user.service";
import { ProductService } from "../service/product.service";
import { Observable, first, map, tap } from "rxjs";
import { ProductModel } from "../model/product.model";

export const productGuard  = (route : ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
console.log({route},{state});

const router = inject(Router);

const id = route.params['id'];
return getProduct(id).pipe(
  first(),
  map((product: any) => {
    if(product){
      return true;
    }
    router.navigate(['/main/products']);
    return false
  })
)
}

export const productResolve : ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id = route.params['id'];

  return getProduct(id).pipe(
    first(),
    map(product=> {
      return {product : product}
    })
  )
}

function getProduct(id: number) : Observable<ProductModel | undefined> {
  const productService = inject(ProductService);
  return productService.getProduct(id);
}
