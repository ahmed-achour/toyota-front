import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private usersUrl = `${BaseService.baseUrl}/stock/`
  constructor(private http: HttpClient) { }

  getAllStock(){
    return this.http.get<any>(this.usersUrl);
  }

  getOneStock(id: String) {
    return this.http.get<any>(this.usersUrl + id)
  }

  deleteStock(id: String) {
    return this.http.delete<any>(this.usersUrl + id)
  }

  addStock(stock: Stock) {
    return this.http.post<any>(this.usersUrl, stock);
  }

  updateStock(stock: Stock) {
    return this.http.patch<any>(this.usersUrl, stock);
  }

}
