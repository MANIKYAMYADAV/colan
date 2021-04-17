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
  userId:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getUserId(id){
    this.userId = '';
    this.userId = id;
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((response)=>{
       console.log("Users List :",response);
       this.users=response.data;
    })
  }

  deleteUser(){
    this.userService.deleteUser(this.userId).subscribe((response)=>{
      console.log("User Deleted : ",response.data)
      this.getAllUsers();
    })
  
  }

}
