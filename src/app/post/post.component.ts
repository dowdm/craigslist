import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale-post.model';
import { SaleService } from '../sale.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[SaleService]
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private saleService: SaleService) { }

  ngOnInit() {
  }

  submitForm(newTitle: string, newCategory: string, newDescription: string, newPrice: number, newLocation: string, newImage: string, newContact: string, newCondition: string, newDate: string) {
    var newSale: Sale = new Sale(newCategory, newPrice, newTitle, newLocation, newDescription, newImage, newContact, newCondition, newDate);
    this.saleService.addSale(newSale);
  }

}
