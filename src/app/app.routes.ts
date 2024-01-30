import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NotFoundComponent } from "./error/not-found/not-found.component";
import { loginGuard } from "../guards/login.guard";
export const appRoutes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', loadChildren: () => import('./main/main.routes').then(m => m.mainRoutes)},
    { path: 'login', canActivate: [loginGuard], component: LoginComponent },
    { path: 'register', canActivate: [loginGuard], loadComponent: () =>
      import('./register/register.component').then(m => m.RegisterComponent)},
  ]},
  { path: '**', component: NotFoundComponent }

];
