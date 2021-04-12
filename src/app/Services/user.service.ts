import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://openchefaws-env.eba-zxrnhky2.ap-south-1.elasticbeanstalk.com/chef/v1';
  //token = localStorage.getItem('token');
 // userId = localStorage.getItem('user_id');
 public tokenId :string="eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7Im5hbWUiOiJtYW5pa3lhbSIsIm1vYmlsZSI6bnVsbCwiZW1haWxJZCI6Im1hbmlreWFtZzEwLjJAZ21haWwuY29tIiwiaWQiOjl9LCJqdGkiOiI5IiwiaWF0IjoxNjE4MjAyNDE5fQ.G1mO2iKr_vb_zVrlokNmaGzy4rFMWOX6xJ0m0AmP8bhBb304bEGUPmU5TblrAlVuNDjlTrvtCAlD2JUZ3lYMDg";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'accessToken': this.tokenId
      // 'Authorization': `Bearer ${this.token}`
    })
  };
  constructor(private http: HttpClient) { }

  getAllUsers(){
    
    return this.http.get<any>(this.apiURL + '/users/list', this.httpOptions);
  }
 
  getUserDetails(data:any){
    return this.http.post<any>(this.apiURL+'',data ,this.httpOptions);
  }

  addUser(data:any){
    return this.http.post<any>(this.apiURL+'',data ,this.httpOptions);
  }

  getOrders(){
    return this.http.get<any>(this.apiURL+'/orders/all',this.httpOptions);
  }

  getCategories(){
    return this.http.get<any>(this.apiURL+'/categories/all',this.httpOptions);
  }

  addCategory(data:any){
    return this.http.post<any>(this.apiURL+'',data,this.httpOptions);
  }

}
