import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean=false;
  token:string | null =""
  user:any
  x: boolean = false
  
  constructor(private userService:UserService) { }
 
  ngOnInit(): void {
   this.isLoggedIn= this.userService.isLoggedIn();
   if(this.isLoggedIn == true){
    this.token = localStorage.getItem('myToken')
    this.user = jwt_decode(this.token!)
    this.x= this.isClient()
   }
  }
logout(){
  this.userService.logout();
}
isClient(){
  if(this.user.role=="client"){
    return true
  } else{
    return false
  }
}
}
