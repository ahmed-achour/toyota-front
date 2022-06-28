import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
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

  delete(id: string, index: number) {
    this.carList.splice(index, 1);
    
    this.carService.deleteCar(id).subscribe({
      next: (result) => {
        console.log(result);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
