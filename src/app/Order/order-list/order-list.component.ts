import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  searchTerm: any;
  orders: any[] = [];
  orderId: any;
  orderForm:any;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {

    this.orderForm = this.fb.group({
      chefName	: ['', Validators.required],
      deliveryAddress	: ['', Validators.required],
      deliveryOption: ['', Validators.required],
      deliveryTime: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: ['', Validators.required],
      discount	:[''],
      name: [''],
      orderId	: [''],
      paymentMode	: [''],
      price	: [''],
      quantity	: [''],
      userName: [''],
      updateDate	: [''],
      stage	: [''],
      userImage	:['']

    })
  }
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
