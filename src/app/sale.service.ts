import { Injectable } from '@angular/core';
import { Sale } from './models/sale-post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SaleService {
  sales: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.sales = database.list('sales');
  }

  getSales() {
    return this.sales;
  }

  getSaleById(saleId: string) {
    return this.database.object('sales/' + saleId);
  }
  addSale(newSale: Sale) {
    this.sales.push(newSale);
  }

}
