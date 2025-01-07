import {Component, HostListener, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isScrolled = false;
  dropdownState: { [key: string]: boolean } = {};
  navList=[
    {title:'Home'},
    {title: 'Shop'},
    {title: 'Products'},
    {title: 'Blog'},
    {title: 'Page'},
    {title: 'Contact'}
  ]
  constructor(  private authService: AuthService, private router: Router) {
  }

  ngOnInit(){

  }
  toggleDropdown(id: string) {
    this.dropdownState[id] = !this.dropdownState[id];
  }

  get isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
