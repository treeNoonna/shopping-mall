import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NotFoundComponent } from "./error/not-found/not-found.component";
import { loginGuard } from "../guards/login.guard";

export const appRoutes : Routes = [
  { path : '', children: [
    { path : '', redirectTo: 'main', pathMatch: 'full'},
    { path : 'main', loadChildren : () => import('./main/main.routes').then(m=>m.mainRoutes)},
    { path : 'login' , component : LoginComponent, canActivate: [loginGuard] },
    { path : 'register', canActivate: [loginGuard] , loadComponent : () => import('./register/register.component').then(m=>m.RegisterComponent)},
/*     { path: 'main', loadComponent : () => import('./main/main.component').then(m => m.MainComponent)} lazy loading */
  ]},
  { path : '**', component: NotFoundComponent}
]
