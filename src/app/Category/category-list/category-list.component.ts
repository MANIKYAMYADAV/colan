import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: any[] = [];
  searchTerm: any;
  categoryId: any;
  categoryForm : any;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {

    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      parentId: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getAllCategories();
  }


  getCategoryId(id) {
    this.categoryId = '';
    this.categoryId = id;

  }


  getAllCategories() {
    this.userService.getCategories().subscribe((response) => {
      this.categories = response.data;
      console.log("All Categories :", response.data);
    })


  }

  saveCategory(formData) {
    this.userService.addCategory(formData).subscribe((response) => {
      console.log("Category Data : ", response.data);
    })
  }

  editCategory(category) {
    console.log("order Id ", category.id)
    this.router.navigate(['add-category'], { queryParams: { 'id': category.id } });
  }


  deleteCategory() {
    console.log("Category ID :",this.categoryId)
    this.userService.delteteCategory(this.categoryId).subscribe((response) => {
      console.log("Deleted Category is :", response.data);
    })

  }


}
