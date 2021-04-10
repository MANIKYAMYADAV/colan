import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  
  public isShow:boolean = false;
   
  toggleSidebar() {
    this.isShow = !this.isShow;
  }


  ngOnInit(): void {
  }

}
