import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import {ProductViewComponent} from "./components/products/product-view/product-view.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-view/:id', component: ProductViewComponent },
  { path: '**', redirectTo: '/' }
];