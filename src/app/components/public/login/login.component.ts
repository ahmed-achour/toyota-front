import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, ) { 
    this.myform = this.fb.group({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn()
    if(isLoggedIn){
      this.router.navigate(['/'])
    }
  }
  login() {

    let data = this.myform.value;

    console.log(data)

    let user = new User( data.username, data.password);

    this.userService.login(user).subscribe({
      next: (result) => {
        console.log(result)
        let token = result.myToken;
        localStorage.setItem("myToken", token)
        console.log(token)
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);


      }
    })

  }
}

