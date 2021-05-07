import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';
import {ElementRef, ViewChild } from '@angular/core';  
import * as XLSX from 'xlsx';  
declare var $ : any;

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  searchTerm: any;
  isLoading = false;

  notificationForm: any;
  notifications:any[]=[];
  config:any;

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Notification.xlsx');
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {

    this.notificationForm = this.fb.group({
      keys: [''],
      messageTitle: ['', Validators.required],
      message: ['', Validators.required],
    })
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.notifications.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit(): void {
    this.getAllNotifications();
  }


  getAllNotifications(){
    this.userService.getAllNotifications().subscribe((response)=>{
      this.notifications = response.data;
      console.log("Notification List : ",response.data);

    })
  }
  createNotification(data) {
    console.log("Notification Data:", data);

    this.userService.postNotification(data).subscribe(response => {

      console.log("Added Notification Data :", response.data);
      this.toastr.success(response.message, "Success")

    }, (error) => {
      this.isLoading = false;
      this.toastr.error(error.error.message, 'Error');
    })
  }

}
