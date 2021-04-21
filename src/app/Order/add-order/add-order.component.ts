import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  orderForm: FormGroup;
  orderId: any;
  orderDetails: any
  isLoading = false;
  todayDate: Date = new Date();



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
    this.activeRoute
      .queryParams
      .subscribe(params => {
        this.orderId = params.id;
        console.log("Order Id from order list :", this.orderId);

        // this.userService.getProductDetails(this.productId).subscribe((response) => {
        //   console.log("User Details : ", response.data);
        //   this.productDetails = response.data;
        // })
      });

    this.userService.getOrderDetails(this.orderId).subscribe(res => {
      this.isLoading = false;
      if (res && res.data) {
        let orderDetails = res.data[0];
        this.orderForm.get('categoryName').setValue(orderDetails.categoryName ? orderDetails.categoryName : '')
        this.orderForm.get('description').setValue(orderDetails.description ? orderDetails.description : '')
        this.orderForm.get('deliveryAddress').setValue(orderDetails.deliveryAddress ? orderDetails.deliveryAddress : '')
        this.orderForm.get('deliveryOption').setValue(orderDetails.deliveryOption ? orderDetails.deliveryOption : '')
        this.orderForm.get('name').setValue(orderDetails.name ? orderDetails.name : '')
        this.orderForm.get('rating').setValue(orderDetails.rating ? orderDetails.rating : '')
        this.orderForm.get('price').setValue(orderDetails.price ? orderDetails.price : '')
        this.orderForm.get('quantity').setValue(orderDetails.quantity ? orderDetails.quantity : '')

      }
      // this.ngAfterViewInit();
    }, (error) => {
      this.isLoading = false;
    })

  }


  saveOrder(orderData) {
    if (this.orderId) {
      this.isLoading = true;
      //  this.userService.updateProduct(productData).subscribe((response)=>{
      //   console.log("Updated Product Data : ",response.data)
      // })
    }
    else {
      console.log("Order Data :",orderData)
      this.isLoading = true;
      this.userService.addOrder(orderData).subscribe((response) => {
        console.log("Added Order Data : ", response.data);
      })
     
    }

  }

}
