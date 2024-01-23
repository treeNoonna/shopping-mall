import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../../service/user.service";


export const loginGuard : CanActivateFn = (route : ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const activateRoute = inject(ActivatedRoute);


  //유저가 있으면 메인으로 보냄
  if(userService.hasUser()){
    router.navigate(['./main'], { relativeTo : activateRoute.root});
  }

  //유저가 없으면 로그인(통과)
  return true;
}
