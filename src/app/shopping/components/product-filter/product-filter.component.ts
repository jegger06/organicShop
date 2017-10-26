import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('cat') cat;

  constructor(public categoryService: CategoryService) {
    this.categories$ = this.categoryService.getAll();
  }

  ngOnInit() {
  }

}
