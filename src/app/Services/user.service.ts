import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://18.191.97.1:4000/api/v1/';
  //token = localStorage.getItem('token');
 // userId = localStorage.getItem('user_id');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${this.token}`
    })
  };
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(this.apiURL + 'users', this.httpOptions);
  }

  getUserDetails(data:any){
    return this.http.post<any>(this.apiURL+'',data ,this.httpOptions);
  }

  addUser(data:any){
    return this.http.post<any>(this.apiURL+'',data ,this.httpOptions);
  }

  getOrders(){
    return this.http.get<any>(this.apiURL+'',this.httpOptions);
  }

  getCategories(){
    return this.http.get<any>(this.apiURL+'',this.httpOptions);
  }

  addCategory(data:any){
    return this.http.post<any>(this.apiURL+'',data,this.httpOptions);
  }

}
