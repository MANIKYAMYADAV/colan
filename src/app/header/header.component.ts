import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 public isShowSideBar:boolean = false;
   
  toggleSidebar() {
    this.isShowSideBar = !this.isShowSideBar;
  }

  ngOnInit(): void {
    //this.toggleSidebar()
  }
  // logout() {
  //   this.router.navigate(['/'])
  //     .then(() => {
  //       localStorage.clear();
  //     });
  // }
}
