import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { User } from '../models/user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = `${BaseService.baseUrl}/users/`


  constructor(private http: HttpClient) { }




  getAllUsers() {
    return this.http.get<any>("http://localhost:3000/users/");
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.usersUrl + id)
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.usersUrl + id)
  }

  addUser(user: User) {
    return this.http.post<any>(this.usersUrl, user);
  }

  updateUser(user: User, id:string) {
    return this.http.patch<any>(this.usersUrl+id, user);
  }

  login(user: User) {
    return this.http.post<any>(this.usersUrl + "login", user);
  }

  isLoggedIn() {

    let token = localStorage.getItem("myToken");
    if (token) {
      return true;
    } else {
      return false;
    }
  }
 
  isAdmin() {
    let token = localStorage.getItem("myToken");
    let x:any = jwt_decode(token!)
    if(x.role=='directeur'){
        return true;
      }
    else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem("myToken");
    return true;
}

getid(){
  let token = localStorage.getItem("myToken");
  let x:any = jwt_decode(token!)
  console.log(x);
  return x;
      
}
isClient(){
  let token = localStorage.getItem('myToken')
  let user:any = jwt_decode(token!)
  if(user.role=="client"){
    return true
  } else{
    return false
  }
}

}
