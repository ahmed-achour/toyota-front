import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private usersUrl = `${BaseService.baseUrl}/client/`

  constructor(private http: HttpClient) { }
  
  getAllClients() {
    return this.http.get<any>(this.usersUrl);
  }

  getOneClient(id: String) {
    return this.http.get<any>(this.usersUrl + id)
  }

  deleteClient(id: String) {
    return this.http.delete<any>(this.usersUrl + id)
  }

  addClient(user: any) {
    return this.http.post<any>(this.usersUrl, user);
  }

  updateClient(user: any) {
    return this.http.put<any>(this.usersUrl, user);
  }
}
