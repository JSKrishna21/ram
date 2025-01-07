import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ActivatedRoute,
  Router,
  RouterModule,
} from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  slides = [
    {
      image:
        "https://wallpapers.com/images/hd/advanced-cctv-security-camera-system-monitoring-public-spaces-9zhz7mfuxxx0ouyw.jpg",
      title: "Welcome to Our Store",
      description: "Discover amazing products",
    },
    {
      image: "https://www.cairnscctv.com.au/images/banner3.jpg",
      title: "Summer Collection",
      description: "Check out our latest summer collection",
    },
    {
      image:
        "https://www.smartsecures.com/blog/blog-images/What-is-an-hd-cctv-camera.jpg",
      title: "Special Offers",
      description: "Get up to 50% off on selected items",
    },
  ];

  categories = [
    {
      title: "Design",
      price: 1500,
      image:
        "https://www.shutterstock.com/image-photo/advanced-cctv-surveillance-systems-office-600nw-2483738621.jpg",
      description:
        "Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.",
    },
    {
      title: "Develop",
      price: 2000,
      image:
        "https://t3.ftcdn.net/jpg/00/86/09/02/360_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg",
      description:
        "Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.",
    },
    {
      title: "Research",
      price: 3000,
      image:
        "https://cctvglobal.in/wp-content/uploads/2018/06/HD-CCTV-Camera-PNG-Photo-e1543216626820.png",
      description:
        "Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.",
    },
    {
      title: "Promotion",
      price: 4000,
      image:
        "https://images.unsplash.com/photo-1534669740902-e09e38a6a29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      description:
        "Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.",
    },
  ];

  products = [
    {
      id: 1,
      name: "Security Camera AH",
      image: "./assets/images/product-img1.png",
      price: 20000,
    },
    {
      id: 2,
      name: "Security Camera AG-1299",
      image: "./assets/images/product-img2.png",
      price: 25000,
    },
    {
      id: 3,
      name: "Security Camera AH-1080",
      image: "./assets/images/product-img3.png",
      price: 30000,
    },
  ];

  currentSlide = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }

  viewProduct() {
    this.router.navigate([`/products`]);
  }
  showDetails(id:Number){
    this.router.navigate([`/products`,id]);
  }
}
