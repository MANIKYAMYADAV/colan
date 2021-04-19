import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  searchTerm: any;
  users: any[] = [];
  userId: any;

  userForm: FormGroup;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService) {

    this.userForm = this.fb.group({
      description: ['', Validators.required],
      emailId: ['', Validators.required],
      isActive: ['', Validators.required],
      /// endingDate:['',Validators.required],
      mobile: ['', Validators.required],
      name: ['', Validators.required],
      rating: ['', Validators.required],
      // ratingCount:['',Validators.required],
      role: ['', Validators.required],
      subscription: ['', Validators.required],
      // subscriptionCost:['',Validators.required],

    })
  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  getUserId(id) {
    this.userId = '';
    this.userId = id;
    console.log("User ID :", this.userId);
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      console.log("Users List :", response);
      this.users = response.data;
    })
  }

  deleteUser() {
    console.log("User ID :", this.userId);
    this.userService.deleteUser(this.userId).subscribe((response) => {
      console.log("User Deleted : ", response.data)
      this.getAllUsers();
    })

  }


  addUser(userData) {
    let data = {
      "emailId": userData.emailId,
      "description": userData.description,
      "isActive": userData.isActive,
      "mobile": userData.mobile,
      "rating":userData.rating,
      "name":userData.name,
      "role":userData.role,
      "subscription":userData.subscription
    }
    this.userService.addUser(data).subscribe((response) => {
      console.log("Add User Data :", response.data);
    })
  }


  openModalForEditUser(fieldId) {
    let userData;
    this.userId = '';
    this.users.forEach(element => {
      if (this.userId == element.id) {
        userData = element;
      }
    });

    let data = {
      "emailId": userData.emailId,
      "description": userData.description,
      "isActive": userData.isActive,
      "mobile": userData.mobile,
      "rating":userData.rating,
      "name":userData.name,
      "role":userData.role,
      "subscription":userData.subscription
    }
    this.userForm.patchValue(data);
    this.userId = this.userId;
  }


  editUser(userData) {
    let data = {
      "emailId": userData.emailId,
      "description": userData.description,
      "isActive": userData.isActive,
      "mobile": userData.mobile,
      "rating":userData.rating,
      "name":userData.name,
      "role":userData.role,
      "subscription":userData.subscription
    }
    this.userService.updateUser(data).subscribe((response) => {
      console.log("Updated Data :", response.data)
    })
  }

}
