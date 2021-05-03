import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  public isShow: boolean = false;
  isUser: boolean = false;
  isCategory: boolean = false;
  isOrder: boolean = false;
  isProduct: boolean = false;
  isTransaction = false;
  isNotification = false;
  public isShowSideBar: boolean = false;

  @Input('isShowSideBar') public ;

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
  toggleTransaction() {
    this.isTransaction = !this.isTransaction;

  }

  toggleNotification() {
    this.isNotification = !this.isNotification;
  }
  ngOnInit(): void {
  }


}
