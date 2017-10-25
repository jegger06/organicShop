import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from './../../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { AppUser } from './../../models/app-user';
import { AuthService } from './../../services/auth.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }

}
