import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  
  public isShow:boolean = false;
  isUser:boolean = false;
  isCategory:boolean = false;
  isOrder:boolean = false;
  isProduct:boolean = false;
   
  toggleSidebar() {
    this.isShow = !this.isShow;
  }
  toggleUser() {
    this.isUser = !this.isUser;
  }
  toggleOrder() {
    this.isOrder = !this.isOrder;
  }
  toggleProduct() {
    this.isProduct = !this.isProduct;
  }
  toggleCategory() {
    this.isCategory = !this.isCategory;
  }

  ngOnInit(): void {
  }

}
