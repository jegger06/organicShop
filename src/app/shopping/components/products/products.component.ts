import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cat: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
    ) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populatProducts();
  }

  private populatProducts() {
    this.productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.cat = params.get('category');
        this.applyFilter();
      });
  }

    private applyFilter() {
      this.filteredProducts = (this.cat) ?
        this.products.filter(product => product.category === this.cat) : this.products;
  }

}
