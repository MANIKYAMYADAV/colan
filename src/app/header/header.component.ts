import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm: any;
  constructor(private router: Router) { }
  public isShowSideBar: boolean = false;

  toggleSidebar() {
    this.isShowSideBar = !this.isShowSideBar;
  }

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
