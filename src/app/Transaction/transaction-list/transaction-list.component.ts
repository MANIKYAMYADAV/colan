import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  searchTerm: any;
  isLoading = false;
  transactionId: any;


  constructor(private userService: UserService,private router : Router) { }

  ngOnInit(): void {
    this.getAllTransactions();

  }

  getAllTransactions() {

    // list of transactions from DB
    this.userService.getAllTransactions().subscribe((response) => {
      console.log("Transaction Data : ", response.data);
    })

  }

  getTransactionId(id) {
    this.transactionId = '';
    this.transactionId = id;
  }

  editTransaction(transaction){
    console.log("Transaction Id ",transaction.id)
    this.router.navigate(['transaction-details'], { queryParams: { 'id': transaction.id } });
  }



}



