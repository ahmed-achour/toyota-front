import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  client:any = {};
  imageUrl = 'http://localhost:3000/';
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private clientService: ClientService,
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    this.clientService.getOneClient(id).subscribe({
      next: (result) => {
        this.client = result;
        this.imageUrl += this.client.photo;
        console.log(this.client)
      },
      error: (error) => {
        console.log(error);
      },
    });

  }

}
