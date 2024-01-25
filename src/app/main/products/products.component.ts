import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { first, tap } from 'rxjs';
import { ProductModel } from '../../../model/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe, NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  productService = inject(ProductService);
  productList$ = this.productService.getProducts();
  router = inject(Router);

  ngOnInit(): void {
    this.productService.getProducts().pipe(
      first(),
      tap((res)=> console.log('productsss',res))
    ).subscribe();
  }

  select(product:ProductModel){
    this.router.navigate([`/main/product/${product.id}`]);
  }


}
