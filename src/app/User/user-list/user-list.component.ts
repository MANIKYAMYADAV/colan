import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  searchTerm: any;
  users:any[]=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
   // this.getAllUsers();
  }

  getAllUsers(){
    // this.userService.getAllUsers().subscribe((response)=>{
    //    console.log("Users List :",response);
    //    this.users=response.data;
    // })
  }

}
