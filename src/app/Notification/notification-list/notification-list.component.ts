import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  searchTerm: any;
  isLoading = false;

  notificationForm: any;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {

    this.notificationForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }

  createNotification(data) {
    console.log("Notification Data:", data);
  }

}
