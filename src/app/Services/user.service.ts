import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  token = localStorage.getItem('token');
  // userId = localStorage.getItem('user_id');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     'Authorization': `Bearer ${this.token}`
    })
  };
  constructor(private http: HttpClient) { }

  apiURL: string = 'http://localhost:4000/users';
  appURL: string = 'http://localhost:4000/index'


  //register as a new user...
  newRegister(data: any) {
    console.log("Service Register Data : ", data);
    return this.http.post(this.appURL + 'register', data);
  }

  newLogin(data: any) {
    console.log("Service Login Data : ", data);
    return this.http.post<any>(this.apiURL + '/login', data,this.httpOptions);
  }



  getAllUsers() {
    return this.http.get<any>(this.apiURL + '/all', this.httpOptions);
  }

  postUser(data) {
    return this.http.post<any>(this.apiURL + '/create', data, this.httpOptions);
  }

  getUserDetails(id) {
    return this.http.get<any>(this.apiURL + `/searchById?id=${id}`, this.httpOptions)
  }

  updateUser(id,data) {
    return this.http.put<any>(this.apiURL + `/${id}`, data, this.httpOptions)
  }

  deleteUser(id) {
    return this.http.delete<any>(this.apiURL + `/${id}`, this.httpOptions);
  }



}
