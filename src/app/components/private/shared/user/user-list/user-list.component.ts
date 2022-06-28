import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[] = [];

  constructor(private userService: UserService, ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (result) => {
        this.userList = result;
        console.log(this.userList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  delete(id: string, index: number) {
    this.userList.splice(index, 1);

    this.userService.deleteUser(id).subscribe({
      next: (result) => {
        console.log(result);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}