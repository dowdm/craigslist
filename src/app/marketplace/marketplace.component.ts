import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from '../models/sale-post.model';
import { SaleService } from '../sale.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [SaleService]
})
export class MarketplaceComponent implements OnInit {
  sales: FirebaseListObservable<any[]>;

  constructor(private router: Router, private saleService: SaleService) { }

  ngOnInit() {
    this.sales = this.saleService.getSales()
  }

  goToDetailPage(clickedSale) {
    this.router.navigate(['sales', clickedSale.$key]);
  }

}
