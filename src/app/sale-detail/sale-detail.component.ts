import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { SaleService } from '../sale.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Sale } from '../models/sale-post.model';


@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css'],
  providers: [SaleService]
})
export class SaleDetailComponent implements OnInit {
  saleId: string;
  saleToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private saleService: SaleService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.saleId = urlParameters['id'];
   });
   this.saleToDisplay = this.saleService.getSaleById(this.saleId);
  }

}
