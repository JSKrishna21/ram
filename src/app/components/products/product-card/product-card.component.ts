import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product.interface';
import {CurrencyPipe, NgIf} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  imports: [
    CurrencyPipe,NgIf,RouterModule
  ],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  selectedImage: string | null = null;

  viewImage(image: string): void {
    this.selectedImage = image;
  }
  addToCart(): void {
    // Implement cart functionality
    console.log('Added to cart:', this.product);
  }
}