import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { CarService } from '../../../../../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  myForm: FormGroup;
  car: any
  selectedFile: any;
  imageUrl = 'assets/img/avatar.png';

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      model: new FormControl(),
      qr_code: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    this.carService.getOneCar(id).subscribe({
      next: (result) => {
        this.car = result;
        this.myForm.patchValue({
          model: this.car.model,
          qr_code: this.car.qr_code,
          price: this.car.price,
          description: this.car.description,
        });
        this.imageUrl='http://localhost:3000/'+this.car.photo
      },
      error: (error) => {
        console.log(error);
      },
    });
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

  update() {
    let id = this.route.snapshot.params?.['id'];
    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('model', data.model),
    formData.append('qr_code', data.qr_code),
    formData.append('price', data.price),
    formData.append('description', data.description),
    formData.append('photo', this.selectedFile);
    console.log(this.selectedFile);
    this.carService.updateCar(formData,id).subscribe({
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
