import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ClientService } from '../../../../../services/client.service';
import { CarService } from 'src/app/services/car.service'; 
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  myForm: FormGroup;
  carList:any[]=[]
  userList:any[]=[]
  selectedFile: any;
  imageUrl = 'assets/img/avatar.png';

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private userService:UserService,
    private carService:CarService
  ) {
    this.myForm = this.fb.group({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      model: new FormControl(),
      total_amount: new FormControl(),
      entretient: new FormControl(),
      account: new FormControl()
    });
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (res)=>{
        this.userList=res
      }
    })
    this.carService.getAllCars().subscribe({
      next: (res)=>{
        this.carList=res
      }
    })
  }

  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
  }

  add() {
    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('firstname', data.firstname),
    formData.append('lastname', data.lastname),
    formData.append('email', data.email),
    formData.append('model', data.model),
    formData.append('total_amount', data.total_amount),
    formData.append('entretient', data.entretient),
    formData.append('account', data.account),
    formData.append('photo', this.selectedFile);
    console.log(this.selectedFile);
    this.clientService.addClient(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/client-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
