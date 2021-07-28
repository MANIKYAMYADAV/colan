import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm: any;
  settingForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService, private activeRoute: ActivatedRoute) {
    this.settingForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      value: ['', Validators.required],
      id: [''],
    })
  }
  public isShowSideBar: boolean = false;

  toggleSidebar() {
    this.isShowSideBar = !this.isShowSideBar;
  }

  // settingAdd(settingData) {
  //   console.log("Setting Data  :", settingData)
  //  // this.isLoading = true;
  //   this.userService.addSetting(settingData).subscribe((response) => {
  //     console.log("Added Setting Data  : ", response.data);
  //   })
  // }
  
  
  ngOnInit(): void {
    //this.toggleSidebar()
  }
  logout() {
    this.router.navigate(['/'])
      .then(() => {
        localStorage.clear();
      });

    this.router.navigate(['/login']);
  }

  // logout() {
  //   this.router.navigate(['/'])
  //     .then(() => {
  //       localStorage.clear();
  //     });
  // }
}
