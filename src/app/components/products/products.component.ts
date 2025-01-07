import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
    this.products$ = this.productService.getProducts();
  }
}