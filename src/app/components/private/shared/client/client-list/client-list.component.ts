import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientList: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe({
      next:(result)=>{
        this.clientList= result;
        console.log(this.clientList)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  delete(id: string, index: number) {
    this.clientList.splice(index, 1);
    
    this.clientService.deleteClient(id).subscribe({
      next: (result) => {
        console.log(result);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
