import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  searchTerm: any;
  isLoading = false;


  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.getAllTransactions();

  }

  getAllTransactions(){
  
  }

}



