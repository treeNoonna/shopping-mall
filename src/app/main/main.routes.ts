import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductComponent } from './products/product/product.component';

export const mainRoutes : Routes = [
    { path : '', component : MainComponent },
    { path : 'product:/id', component: ProductComponent},
    { path : 'profile', loadChildren : () => import('./header/profile/profile.routes').then(m=>m.profileRoutes)}

]
