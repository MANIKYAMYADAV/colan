import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  searchTerm: any;
  orders: any[] = [];
  orderId: any;


  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {

    this.userService.getOrders().subscribe((response) => {
      this.orders = response.data;
      console.log("All Orders :", response.data);
    })
  }
  getOrderId(id) {
    this.orderId = '';
    this.orderId = id;

  }
  
  saveOrder(orderData){
    this.userService.addOrder(orderData).subscribe((response)=>{
      console.log("Order Data : ",response.data)
    })
  }

  editOrder(order) {

    console.log("order Id ", order.id)
    this.router.navigate(['add-order'], { queryParams: { 'id': order.id } });

  }

  deleteOrder() {
    this.userService.deleteOrder(this.orderId).subscribe((response) => {
      console.log("Deleted Order is :", response.data);
    })

  }

}
