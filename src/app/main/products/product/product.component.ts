import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../../service/product.service';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../../model/product.model';
import { CartService } from '../../../../service/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  cartService = inject(CartService);
  router = inject(Router);

  product! : ProductModel;
  //product$!: Observable<ProductModel | undefined>;

  ngOnInit(): void {

    this.product = this.activatedRoute.snapshot.data['data']['product'];
    console.log(this.product,'resolve');
  }


  addToCart(){
    this.cartService.add(this.product);
      //add to cart 하면 cart로 저절로 넘어가지도록 하기
    this.router.navigate(['./main/cart'])
  }

  checkout() {

  }
}
