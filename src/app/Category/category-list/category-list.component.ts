import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories : any[]=[];
  searchTerm:any;
  categoryId:any;

  constructor(private userService : UserService,private router:Router) { }

  ngOnInit(): void {
    this.getAllCategories();
  }


  getCategoryId(id){
    this.categoryId='';
    this.categoryId=id;

  }


  getAllCategories(){
    this.userService.getCategories().subscribe((response)=>{
      this.categories=response.data;
      console.log("All Categories :",response.data);
    })

    
  }


  editCategory(category){
    console.log("order Id ", category.id)
    this.router.navigate(['add-category'], { queryParams: { 'id': category.id } });
  }


  deleteCategory() {
    this.userService.delteteCategory(this.categoryId).subscribe((response) => {
      console.log("Deleted Category is :", response.data);
    })

  }


}
