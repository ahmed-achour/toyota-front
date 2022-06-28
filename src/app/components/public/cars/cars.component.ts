import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carList: any[] = [];

  constructor(private carService: CarService, ) {}

  ngOnInit(): void {
    this.carService.getAllCars().subscribe({
      next: (result) => {
        this.carList = result;
        console.log(this.carList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
