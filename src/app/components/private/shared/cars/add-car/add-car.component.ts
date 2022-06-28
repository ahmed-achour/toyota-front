import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { CarService } from '../../../../../services/car.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  myForm: FormGroup;
  selectedFile: any;
  imageUrl = 'assets/img/avatar.png';

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      model: new FormControl(),
      qr_code: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    });
  }

  ngOnInit(): void {}

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
    formData.append('model', data.model),
    formData.append('qr_code', data.qr_code),
    formData.append('price', data.price),
    formData.append('description', data.description),
    formData.append('photo', this.selectedFile);
    console.log(this.selectedFile);
    this.carService.addCar(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/cars-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
