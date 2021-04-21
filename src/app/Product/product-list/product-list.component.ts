import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchTerm:any;
  products:any[]=[];
  productForm: FormGroup;
  isLoading=false;
  productId:any;


  constructor(private fb: FormBuilder,private userService:UserService, private router: Router, private toastr: ToastrService) {

    this.productForm = this.fb.group({
      availableDate	: ['', Validators.required],
      availableTime	:['',Validators.required],
      categoryId	:['',Validators.required],
      categoryName	:['',Validators.required],
      deliveryOption	:['',Validators.required],
      deliveryTime	:['',Validators.required],
      description	:['',Validators.required],
      endingDate	:['',Validators.required],
      endingTime	:['',Validators.required],
      imagePath	:['',Validators.required],
      isActive	:['',Validators.required],
      isEditable	:['',Validators.required],
      name:[''],
      price:[''],
      quantity:[''],
      rating:[''],
      ratingCount:[''],
      special:[''],
      stock:[''],
      userAddress:[''],
      userName:[''],
      status:[''],
      isDeletable	:['']

    })
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.userService.getAllProducts().subscribe((response)=>{
      this.products = response.data;
      console.log("All Products : ",response.data);
    })
    
  }

  getProductId(id) {
    this.productId = '';
    this.productId = id;
    console.log("product Id  :", this.productId);
  }

  editProduct(product) {
    console.log("product Id ",product.id)
    this.router.navigate(['add-product'], { queryParams: { 'id': product.id } });

  }


  saveProduct(productData){
    this.userService.addProduct(productData).subscribe((response)=>{
      console.log("Product Data",response.data)
    })
  }

  deleteProduct() {
    this.isLoading=true;
    console.log("product Id :", this.productId);
    this.userService.deleteProduct(this.productId).subscribe((response) => {
      console.log("Product Deleted : ", response.data)
      this.getAllProducts();
      this.isLoading =false;
    })

  }

}
