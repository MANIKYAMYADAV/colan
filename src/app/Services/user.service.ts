import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://openchefaws-env.eba-zxrnhky2.ap-south-1.elasticbeanstalk.com/chef/v1';
  //token = localStorage.getItem('token');
  // userId = localStorage.getItem('user_id');
  public tokenId: string = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7Im5hbWUiOiJtYW5pa3lhbSIsIm1vYmlsZSI6bnVsbCwiZW1haWxJZCI6Im1hbmlreWFtZzEwLjJAZ21haWwuY29tIiwiaWQiOjl9LCJqdGkiOiI5IiwiaWF0IjoxNjE4MjAyNDE5fQ.G1mO2iKr_vb_zVrlokNmaGzy4rFMWOX6xJ0m0AmP8bhBb304bEGUPmU5TblrAlVuNDjlTrvtCAlD2JUZ3lYMDg";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'accessToken': this.tokenId
      // 'Authorization': `Bearer ${this.token}`
    })
  };
  constructor(private http: HttpClient) { }


  //Users service call  to api from userService component classs

  getAllUsers() {

    return this.http.get<any>(this.apiURL + '/users/list', this.httpOptions);
  }

  getUserDetails(id) {
    return this.http.get<any>(this.apiURL + `/users/${id}`, this.httpOptions);
  }

  addUser(data: any) {
    return this.http.post<any>(this.apiURL + '', data, this.httpOptions);
  }

  updateUser(data: any) {
    return this.http.put<any>(this.apiURL + '/users/update', data, this.httpOptions);
  }

  deleteUser(id) {
    return this.http.delete<any>(this.apiURL + `/users/inactive + ${id}`, this.httpOptions)
  }


  //Categories service call  to api from userService component classs

  getCategoryDetails(id) {
    return this.http.post<any>(this.apiURL + '/category/id', id, this.httpOptions)
  }

  getCategories() {
    return this.http.get<any>(this.apiURL + '/categories/all', this.httpOptions);
  }

  addCategory(data: any) {
    return this.http.post<any>(this.apiURL + '', data, this.httpOptions);
  }

  updateCategory(data) {
    return this.http.put<any>(this.apiURL + '/categories/update', data, this.httpOptions);

  }

  delteteCategory(id) {
    return this.http.delete<any>(this.apiURL + `/categories/update+ ${id}`, this.httpOptions);

  }


  //Orders service call  to api from userService component classs

  getOrders() {
    return this.http.get<any>(this.apiURL + '/orders/all', this.httpOptions);
  }

  getOrderDetails(id) {
    return this.http.post<any>(this.apiURL + '/orders/order', id, this.httpOptions)
  }

  addOrder(data: any) {
    return this.http.post<any>(this.apiURL + '/orders/add', data, this.httpOptions);
  }
  deleteOrder(id) {
    return this.http.delete<any>(this.apiURL + `/orders/delete+ ${id}`, this.httpOptions);

  }


  //Products service call  to api from userService component classs


  getAllProducts() {
    return this.http.get<any>(this.apiURL + '/products/list', this.httpOptions)
  }

  getProductDetails(id) {
    return this.http.post<any>(this.apiURL + '/products/category-product', id, this.httpOptions)
  }


  addProduct(data: any) {
    return this.http.post<any>(this.apiURL + '/products/add', data, this.httpOptions);
  }

  deleteProduct(id) {
    return this.http.delete<any>(this.apiURL + `/products/delete+ ${id}`, this.httpOptions);
  }

  //Transactions service call  to api from userService component classs

  getAllTransactions() {
    return this.http.get<any>(this.apiURL + '/transactions', this.httpOptions);
  }


  getTransactionDetails(id) {
    return this.http.get<any>(this.apiURL + `/transactions/${id}`, this.httpOptions);
  }

}
