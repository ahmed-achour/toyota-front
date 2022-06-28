import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockList: any[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getAllStock().subscribe({
      next:(result)=>{
        this.stockList= result;
        console.log(this.stockList)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  delete(id: string, index: number) {
    this.stockList.splice(index, 1);
    
    this.stockService.deleteStock(id).subscribe({
      next: (result) => {
        console.log(result);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
