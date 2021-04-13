import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;


  constructor(private fb: FormBuilder,private userService:UserService, private router: Router, private toastr: ToastrService) {

    this.userForm = this.fb.group({
      description: ['', Validators.required],
      emailId:['',Validators.required],
      isActive:['',Validators.required],
      endingDate:['',Validators.required],
      mobile:['',Validators.required],
      name:['',Validators.required],
      rating:['',Validators.required],
      ratingCount:['',Validators.required],
      role:['',Validators.required],
      subscription:['',Validators.required],
      subscriptionCost:['',Validators.required],
      updateDate:['',Validators.required],

    })
  }

  ngOnInit(): void {
  }

}
