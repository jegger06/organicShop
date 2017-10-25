import { OrderService } from './../../services/order.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
    this.orders$ = this.authService.user$.switchMap(u => this.orderService.getOrdersByUser(u.uid));
  }

  ngOnInit() {
  }

}
