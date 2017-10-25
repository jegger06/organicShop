import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  order$;

  constructor(private orderService: OrderService) {
    this.order$ = this.orderService.getOrders();
  }

  ngOnInit() {
  }

}
