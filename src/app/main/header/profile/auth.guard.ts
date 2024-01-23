import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";


export const authGuard : CanActivateFn = (route : ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  const router = inject(Router);
  const activateRoute = inject(ActivatedRoute);


  //navigate 함수에 대괄호로 주면 ./login 저기로 감
  //router.navigate(['./login'], {relativeTo : activateRoute.root})

  return true;
}


export const profileResolve : ResolveFn<{id:number}> = (route : ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  return {
    id : 2
  }
};
