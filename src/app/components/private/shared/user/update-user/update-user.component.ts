import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  x: FormGroup;
  user:any
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.x = this.fb.group({
      username: new FormControl(),
      password: new FormControl(),
      role: new FormControl(),
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    this.userService.getOneUser(id).subscribe({
      next: (result) => {
        this.user = result;
        this.x.patchValue({
          username: this.user.username,
          password: this.user.password,
          role: this.user.role,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  update() {
    let id = this.route.snapshot.params?.['id'];
    let data = this.x.value;
    let user = new User(data.username,data.password,data.role)

    this.userService.updateUser(user,id).subscribe({
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
