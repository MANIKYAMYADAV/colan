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
  userDetails: any;
  isLoading = false;
  todayDate: Date = new Date();



  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {

    this.userForm = this.fb.group({
      description: ['', Validators.required],
      emailId: ['', Validators.required],
      isActive: ['', Validators.required],
      endingDate: ['', Validators.required],
      mobile: ['', Validators.required],
      name: ['', Validators.required],
      rating: ['', Validators.required],
      // ratingCount:['',Validators.required],
      role: ['', Validators.required],
      subscription: ['', Validators.required],
      subscriptionCost: ['', Validators.required],

    })
  }



  ngOnInit(): void {


    //getting id using activated route from path of(query params)
    this.activeRoute
      .queryParams
      .subscribe(params => {
        this.userId = params.id;
        console.log("User Id from user list :", this.userId);

        // this.userService.getUserDetails(this.userId).subscribe((response) => {
        //   console.log("User Details : ", response.data);
        //   this.userDetails = response.data;
        // })
      });


    // for getting specify user on id
    this.userService.getUserDetails(this.userId).subscribe(res => {
      this.isLoading = false;
      if (res && res.data) {
        let userDetails = res.data;
        console.log("User Details : ", userDetails)  //
        this.userForm.get('emailId').setValue(userDetails.emailId ? userDetails.emailId : '')
        this.userForm.get('description').setValue(userDetails.description ? userDetails.description : '')
        this.userForm.get('isActive').setValue(userDetails.isActive ? userDetails.isActive : '')
        this.userForm.get('mobile').setValue(userDetails.mobile ? userDetails.mobile : '')
        this.userForm.get('name').setValue(userDetails.name ? userDetails.name : '')
        this.userForm.get('rating').setValue(userDetails.rating ? userDetails.rating : '')
        this.userForm.get('role').setValue(userDetails.role ? userDetails.role : '')
        this.userForm.get('subscription').setValue(userDetails.subscription ? userDetails.subscription : '')
        this.userForm.get('subscriptionCost').setValue(userDetails.subscriptionCost ? userDetails.subscriptionCost : '')
        this.userForm.get('endingDate').setValue(userDetails.endingDate ? userDetails.endingDate : '')
        this.userForm.get('ratingCount').setValue(userDetails.ratingCount ? userDetails.ratingCount : '')


        this.toastr.success(res.message, "Success")

      }
      else {
        this.toastr.error(res.message, "Error");

      }
    }, (error) => {
      this.isLoading = false;
      this.toastr.error(error.error.message, 'Error');
    })

  }



  // by using add we can add or update based on id present
  addUser(data) {

    console.log("Updated User Data :",data);
    if (this.userId) {
      this.userService.updateUser(data).subscribe((response) => {
        console.log("Updated User Data :", response.data);
      })
    }
    else {
      console.log("User Form Data :", data);
      this.userService.addUser(data).subscribe((response) => {
        console.log("Added User Data :", response.data);

      })


    }


  }

}
