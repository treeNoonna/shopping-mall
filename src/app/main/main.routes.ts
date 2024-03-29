import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductComponent } from './products/product/product.component';
import { profileGuard } from '../../guards/profile.guard';
import { CartComponent } from './cart/cart.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ProductsComponent } from './products/products.component';
import { productGuard, productResolve } from '../../guards/product.guard';


//canLoad : 처음 주소로 들어왔을때만 실행(쓰지마) , canActivate : 인증되지 않은 사용자를 방지하기 위해 해당 주소에 들어올 때 마다 호출됨
//resolve : 해당 주소로 보낼건지 말건지 (true/false)/ 함수의 결과만 component에 전달해줌, canDeactivate : 주소를 나갔을 떄 실행

export const mainRoutes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', component: ProductsComponent},
    {path: 'product/:id', canActivate: [productGuard], resolve: {data: productResolve}, component: ProductComponent},
    {path: 'profile',
      canActivate: [profileGuard],
      // resolve: {data: profileResolve}, // 무조건 json 형태로 감싸져야 값이 전달된다.
      loadChildren: () => import('./header/profile/profile.routes').then(m => m.profileRoutes)
    },
    {path: 'cart', canActivate  : [profileGuard], component: CartComponent },
    {path: 'purchase', component: PurchaseComponent }
  ]},
];
