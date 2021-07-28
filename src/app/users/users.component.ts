import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
declare var $: any;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  todayDate: Date = new Date();
  config: any;
  searchTerm: any;
  users: any[] = [];
  formId: any;
  userData:any;


  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Product.xlsx');
  }

  constructor(
    private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address:[''],
      state:[''],
      city:['']
      
    })
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.users.length
    };
  }

  getEmpDetails() {
    this.userService.getUserDetails(this.formId).subscribe(res => {
      this.userData = '';
      if (res && res.data && res.data.length > 0) {
        let resdata = res.data.filter((x: any) => x._id == this.formId);
        if (resdata && resdata.length > 0) {
          this.userData = resdata[0];
    
          let data = {
            name: this.userData ? this.userData.name : '',
            phone: this.userData ? this.userData.phone : '',   
            address: this.userData ? this.userData.address : '',   
            state: this.userData ? this.userData.state : '',   
            city: this.userData ? this.userData.city : '',   

          }
          this.userForm.patchValue(data);
        }
      }
    });
  }
  formReset(){
    this.userForm.reset();  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.activeRoute.queryParams.subscribe(params => {
      this.formId = params.id;
      console.log("ID :",this.formId);

      this.userService.getUserDetails(this.formId).subscribe(Response => {
        this.userData = '';
        if (Response && Response.data) {
          this.userData = Response.data;
          console.log("User Details :",this.userData);
          let data = {
            name: this.userData ? this.userData.name : '',
            phone: this.userData ? this.userData.phone : '',   
            address: this.userData ? this.userData.address : '',   
            state: this.userData ? this.userData.state : '',   
            city: this.userData ? this.userData.city : '',   

          }
          this.userForm.patchValue(data);
  
        }
           
      })
  
    });

  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
      console.log("All Users : ", response);
    })
  }

  getFormId(id) {
    this.formId = '';
    this.formId = id;
  }


  deleteUser() {
    this.userService.deleteUser(this.formId).subscribe(Response => {
      console.log(Response);
      this.getAllUsers();
    })
  }

  employeeData(data) {
    console.log(data);
    if(this.formId){
      this.userService.updateUser(this.formId,data).subscribe((response) => {
        console.log("Updated User Data :", response);
        this.userForm.reset();
        this.getAllUsers();
      })
    }
    else
    {
      this.userService.postUser(data).subscribe((response) => {
        console.log("Created User Data :", response);
        this.userForm.reset();
        this.getAllUsers();
        //alert(`${response.message}`)
      })
    }

  }


  editEmployee(id: any) {
    this.router.navigate(['users'], { queryParams: { 'id': id } });
  }
  // this.userService.getEmployeeDetails(this.formId).subscribe((res)=>{
  //   this.userData = '';
  //   if (res && res.data && res.data.length > 0) {
  //     let resdata = res.data.filter((x: any) => x._id == this.formId);
  //     if (resdata && resdata.length > 0) {
  //       this.userData = resdata[0];
  
  //       let data = {
  //         employeeName: this.userData ? this.userData.employeeName : '',
  //         employeeId: this.userData ? this.userData.employeeId : '',   
  //       }
  //       this.userForm.patchValue(data);
  //     }
  //   }
  
  // })

  getDataForEditForm(id) {
    this.formId=id
    this.userService.getUserDetails(this.formId).subscribe(Response => {
      if (Response == 'success') { }
      let data = {
        "employeeId": Response.data.employeeId,
        "employeeName": Response.data.employeeName,
      }
      this.userForm.patchValue(data);
    })


  }

}
