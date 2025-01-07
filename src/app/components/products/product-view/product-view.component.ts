import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../core/services/product.service";

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [
   CurrencyPipe,NgIf,NgClass,NgForOf
  ],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
  product: any;


  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) {}


  ngOnInit(): void {
   
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;
      });
    }

  }


  generateStars(rating: number | undefined): string[] {
    if (!rating) {
      return [];
    }

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push('full');
      } else if (rating > i - 1) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  }

}
