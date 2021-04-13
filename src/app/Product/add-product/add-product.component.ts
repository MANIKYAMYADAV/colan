import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  userForm: FormGroup;


  constructor(private fb: FormBuilder,private userService:UserService, private router: Router, private toastr: ToastrService) {

    this.userForm = this.fb.group({
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
  }

}
