import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

// import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, FullCalendarComponent } from '@fullcalendar/angular';
// import * as moment from 'moment';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  productId:any;
  productDetails:any
  isLoading=false;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {

    this.productForm = this.fb.group({
      availableDate	: ['', Validators.required],
      availableTime	:['',Validators.required],
      categoryId	:['',Validators.required],
      categoryName	:['',Validators.required],
      deliveryOption	:['',Validators.required],
      deliveryTime	:['',Validators.required],
      description	:['',Validators.required],
      endingDate	:['',Validators.required],
      endingTime	:['',Validators.required],
      imagePath	:['',Validators.required],
      isActive	:['',Validators.required],
      isEditable	:['',Validators.required],
      name:[''],
      price:[''],
      quantity:[''],
      rating:[''],
      ratingCount:[''],
      special:[''],
      stock:[''],
      userAddress:[''],
      userName:[''],
      status:[''],
      isDeletable	:['']

    })
  }
  ngOnInit(): void {
    this.activeRoute
      .queryParams
      .subscribe(params => {
        this.productId = params.id;
        console.log("product Id from product list :", this.productId);

        // this.userService.getProductDetails(this.productId).subscribe((response) => {
        //   console.log("User Details : ", response.data);
        //   this.productDetails = response.data;
        // })
      });

      this.userService.getProductDetails(this.productId).subscribe(res => {
        this.isLoading = false;
        if (res && res.data) {
          let productDetails = res.data[0];
          this.productForm.get('categoryName').setValue(productDetails.categoryName ? productDetails.categoryName : '')
          this.productForm.get('description').setValue(productDetails.description ? productDetails.description : '')
          this.productForm.get('endingDate').setValue(productDetails.endingDate ? productDetails.endingDate : '')
          this.productForm.get('deliveryOption').setValue(productDetails.deliveryOption ? productDetails.deliveryOption : '')
          this.productForm.get('name').setValue(productDetails.name ? productDetails.name : '')
          this.productForm.get('rating').setValue(productDetails.rating ? productDetails.rating : '')
          this.productForm.get('price').setValue(productDetails.price ? productDetails.price : '')
          this.productForm.get('quantity').setValue(productDetails.quantity ? productDetails.quantity : '')
       
        }
       // this.ngAfterViewInit();
      }, (error) => {
        this.isLoading = false;
      })

  }


  saveProduct(productData){

    if(this.productId==null)
    {
      this.isLoading=true;
      this.userService.addProduct(productData).subscribe((response)=>{
        console.log("Added Product Data : ",response.data);
      })
    }
    else{
      this.isLoading=true;
      //  this.userService.updateProduct(productData).subscribe((response)=>{
      //   console.log("Updated Product Data : ",response.data)
      // })
    }

  }


  // addEvent(event: MatDatepickerInputEvent<Date>) {
  //   console.log(moment(new Date(event.value)).format('MM/DD/yyyy'));
  //   this.calendarOptions.selectConstraint = {
  //     start: moment(new Date(event.value)).format('YYYY-MM-DD')
  //   }
  //   this.calendarOptions.eventConstraint = {
  //     start: moment(new Date(event.value)).format('YYYY-MM-DD')
  //   }
  //   // this.appoinmentStep2.get('starting_date').setValue(moment(new Date(event.value)).format('mm/dd/yyyy'))
  // }

}
