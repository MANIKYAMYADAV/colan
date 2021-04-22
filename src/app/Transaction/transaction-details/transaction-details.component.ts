import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {


  transactionForm: FormGroup;
  transactionId: any;
  transactionDetails: any;
  isLoading = false;
  // todayDate: Date = new Date();



  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {

    this.transactionForm = this.fb.group({
      description: ['', Validators.required],
      transactionId: ['', Validators.required],
      status: ['', Validators.required],
      totalAmount: ['', Validators.required],
      type: ['', Validators.required]
    })
  }



  ngOnInit(): void {


    //getting id using activated route from path of(query params)
    this.activeRoute
      .queryParams
      .subscribe(params => {
        this.transactionId = params.id;
        console.log("User Id from user list :", this.transactionId);
      });


    // for getting specify user on id
    this.userService.getUserDetails(this.transactionId).subscribe(res => {
      this.isLoading = false;
      if (res && res.data) {
        let transactionDetails = res.data[0];
        this.transactionForm.get('transactionId').setValue(transactionDetails.transactionId ? transactionDetails.transactionId : '')
        this.transactionForm.get('description').setValue(transactionDetails.description ? transactionDetails.description : '')
        this.transactionForm.get('status').setValue(transactionDetails.status ? transactionDetails.status : '')
        this.transactionForm.get('type').setValue(transactionDetails.type ? transactionDetails.type : '')
        this.transactionForm.get('totalAmount').setValue(transactionDetails.totalAmount ? transactionDetails.totalAmount : '')
      }
    }, (error) => {
      this.isLoading = false;
    })

  }



}
