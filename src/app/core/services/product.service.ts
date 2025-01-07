import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating?: number; // Optional property for rating
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Security Camera AH',
      price: 20000,
      description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
      image: './assets/images/product-img1.png',
      rating: 4.5, // Added rating
    },
    {
      id: 2,
      name: 'Security Camera AG-1299',
      price: 25000,
      description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
      image: './assets/images/product-img2.png',
      rating: 4.0, // Added rating
    },
    {
      id: 3,
      name: 'Security Camera AH-1080',
      price: 30000,
      description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
      image: './assets/images/product-img3.png',
      rating: 3.8, // Added rating
    },
    {
      id: 4,
      name: 'Security Camera AH-1080',
      price: 30000,
      description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
      image: 'https://www.shutterstock.com/image-photo/advanced-cctv-surveillance-systems-office-600nw-2483738621.jpg',
      rating: 4.2, // Added rating
    },
    {
      id: 5,
      name: 'Security Camera AH',
      price: 20000,
      description: 'A fantastic product with amazing features.',
      image: './assets/images/product-img1.png',
      rating: 4.5, // Added rating
    },
    {
      id: 6,
      name: 'Security Camera AG-1299',
      price: 25000,
      description: 'Another great product you will love.',
      image: './assets/images/product-img2.png',
      rating: 4.0, // Added rating
    },
    {
      id: 7,
      name: 'Security Camera AH-1080',
      price: 30000,
      description: 'Another great product you will love.',
      image: './assets/images/product-img3.png',
      rating: 3.9, // Added rating
    },
    {
      id: 8,
      name: 'Security Camera AH-1080',
      price: 30000,
      description: 'Another great product you will love.',
      image: 'https://www.shutterstock.com/image-photo/advanced-cctv-surveillance-systems-office-600nw-2483738621.jpg',
      rating: 4.3, // Added rating
    },
  ];


  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number | string): Observable<Product | undefined> {
    const productId = typeof id === 'string' ? Number(id) : id;
    return of(this.products.find((product) => product.id === productId));
  }
}
