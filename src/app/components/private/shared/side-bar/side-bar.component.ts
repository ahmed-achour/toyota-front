import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  userid:any
  user:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userid = this.userService.getid();
    this.userService.getOneUser(this.userid.id).subscribe({
      next: (res)=>{
        this.user=res;
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })

    
  }
  getID(){
   
  }
}
