import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private usersUrl = `${BaseService.baseUrl}/cars/`

  constructor(private http: HttpClient) { }




  getAllCars() {
    return this.http.get<any>(this.usersUrl);
  }

  getOneCar(id: String) {
    return this.http.get<any>(this.usersUrl + id)
  }

  deleteCar(id: String) {
    return this.http.delete<any>(this.usersUrl + id)
  }

  addCar(car: any) {
    return this.http.post<any>(this.usersUrl, car);
  }

  updateCar(car: any, id:string) {
    return this.http.patch<any>(this.usersUrl+id, car);
  }

}
