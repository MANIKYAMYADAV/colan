import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categoryId: any;
  categoryDetails: any;
  isLoading = false;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {

    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      parentId: ['', Validators.required]
    })
  }



  ngOnInit(): void {
    this.activeRoute
      .queryParams
      .subscribe(params => {
        this.categoryId = params.id;
        console.log("CategoryId from category list :", this.categoryId);

        // this.userService.getProductDetails(this.productId).subscribe((response) => {
        //   console.log("User Details : ", response.data);
        //   this.productDetails = response.data;
        // })
      });

    this.userService.getCategoryDetails(this.categoryId).subscribe(res => {
      this.isLoading = false;
      if (res && res.data) {
        let categoryDetails = res.data[0];
        this.categoryForm.get('name').setValue(categoryDetails.name ? categoryDetails.name : '')
        this.categoryForm.get('parentId').setValue(categoryDetails.parentId ? categoryDetails.parentId : '')

      }
      // this.ngAfterViewInit();
    }, (error) => {
      this.isLoading = false;
    })

  }


  saveCategory(categoryData) {
    if (this.categoryId) {
      this.isLoading = true;
      this.userService.updateCategory(categoryData).subscribe((response) => {
        console.log("Updated category data : ", response.data)
      })

    }
    else {
      this.isLoading = true;
      this.userService.addCategory(categoryData).subscribe((response) => {
        console.log("Added Category Data : ", response.data);
      })
    }

  }

}
