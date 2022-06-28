import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { StockService } from '../../../../../services/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
  myForm: FormGroup;
  piece: any

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      type: new FormControl(),
      prix: new FormControl(),
      qte: new FormControl()
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    this.stockService.getOneStock(id).subscribe({
      next: (result) => {
        this.piece = result;
        this.myForm.patchValue({
          type: this.piece.type,
          qte: this.piece.qte,
          prix: this.piece.prix,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }



  update() {
    let id = this.route.snapshot.params?.['id'];
    let data = this.myForm.value;
    let formData = new FormData();
    let stock = new Stock(data.type,data.qte,data.prix)
    this.stockService.updateStock(stock,id).subscribe({
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
