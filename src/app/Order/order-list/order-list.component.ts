import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  searchTerm: any;
  orders: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {

    this.userService.getOrders().subscribe((response) => {
      this.orders = response.data;
      console.log("All Orders :", response.data);
    })
  }

}
