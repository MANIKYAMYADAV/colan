import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchTerm:any;
  products:any[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.userService.getAllProducts().subscribe((response)=>{
      this.products = response.data;
      console.log("All Products : ",response.data);
    })
    
  }

}
