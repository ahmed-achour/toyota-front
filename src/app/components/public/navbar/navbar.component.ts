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
  token = localStorage.getItem('myToken')
  user:any = jwt_decode(this.token!)
  
  constructor(private userService:UserService) { }
 
  ngOnInit(): void {
   this.isLoggedIn= this.userService.isLoggedIn();
   console.log(this.user)
   console.log(this.isLoggedIn);
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
