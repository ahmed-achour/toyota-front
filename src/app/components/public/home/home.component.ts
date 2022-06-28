import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
