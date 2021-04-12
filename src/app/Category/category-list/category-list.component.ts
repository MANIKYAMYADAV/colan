import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories : any[]=[];
  searchTerm:any;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.userService.getCategories().subscribe((response)=>{
      this.categories=response.data;
      console.log("All Categories :",response.data);
    })

    
  }

}
