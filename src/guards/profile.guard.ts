import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../service/user.service";


export const profileGuard : CanActivateFn = (route : ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const activateRoute = inject(ActivatedRoute);

  //profile들어올 때 로그인 안하면 login화면으로 가
  if(!userService.isLoggedin()){
   router.navigate(['./login'], {relativeTo : activateRoute.root})
  }

  //navigate 함수에 대괄호로 주면 ./login 저기로 감
  //router.navigate(['./login'], {relativeTo : activateRoute.root})

  return true;
}


export const profileResolve : ResolveFn<{id:number}> = (route : ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  return {
    id : 2
  }
};
