import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Data, Router } from '@angular/router';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  x: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.x = this.fb.group({
      username: new FormControl(),
      password: new FormControl(),
      role: new FormControl(),
    });
  }

  ngOnInit(): void {}


  add() {
    let data = this.x.value;
    let user = new User(data.username,data.password,data.role)

    this.userService.addUser(user).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/user-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
