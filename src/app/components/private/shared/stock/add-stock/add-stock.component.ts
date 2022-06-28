import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/models/stock';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  x: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
    private router: Router
  ) {
    this.x = this.fb.group({
      type: new FormControl(),
      qte: new FormControl(),
      prix: new FormControl(),
    });
  }
  ngOnInit(): void {
  }

  add() {
    let data = this.x.value;
    let stock = new Stock(data.type,data.qte,data.prix)

    this.stockService.addStock(stock).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/stock-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
