import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  userId: any;
  userDetails:any;
  isLoading=false;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {

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
    this.activeRoute
      .queryParams
      .subscribe(params => {
        this.userId = params.id;
        console.log("User Id from user list :", this.userId);

        this.userService.getUserDetails(this.userId).subscribe((response) => {
          console.log("User Details : ", response.data);
          this.userDetails = response.data;
        })
      });

      this.userService.getUserDetails(this.userId).subscribe(res => {
        this.isLoading = false;
        if (res && res.data) {
          let userDetails = res.data[0];
          this.userForm.get('emailId').setValue(userDetails.emailId ? userDetails.emailId : '')
          this.userForm.get('description').setValue(userDetails.description ? userDetails.description : '')
          this.userForm.get('isActive').setValue(userDetails.isActive ? userDetails.isActive : '')
          this.userForm.get('mobile').setValue(userDetails.mobile ? userDetails.mobile : '')
          this.userForm.get('name').setValue(userDetails.name ? userDetails.name : '')
          this.userForm.get('rating').setValue(userDetails.rating ? userDetails.rating : '')
          this.userForm.get('role').setValue(userDetails.role ? userDetails.role : '')
          this.userForm.get('subscription').setValue(userDetails.subscription ? userDetails.subscription : '')
       
        }
       // this.ngAfterViewInit();
      }, (error) => {
        this.isLoading = false;
      })

  }


  addUser(data) {
    if (this.userId == null) {
      this.userService.addUser(data).subscribe((response) => {
        console.log("Added User Data :", response.data);

      })
    }
    else {
      this.userService.updateUser(data).subscribe((response) => {
        console.log("Updated User Data :", response.data);
      })

    }


  }

}
