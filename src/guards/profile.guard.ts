import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../service/user.service";

export const profileGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userService = inject(UserService);

  const router = inject(Router);
  const activateRoute = inject(ActivatedRoute);

  if(!userService.isLoggedin()) {
    router.navigate(['./login'], {relativeTo: activateRoute.root});
  }

  return true;
}
