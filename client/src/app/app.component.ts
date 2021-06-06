import { Component, OnInit } from '@angular/core';
import {BreadcrumbDefinition, BreadcrumbService} from "xng-breadcrumb";
import {Observable} from "rxjs";
import {BasketService} from "./basket/basket.service";
import {AccountService} from "./account/account.service";
import {ShopService} from "./shop/shop.service";
import {environment} from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DriveMoto';

  baseUrl = environment.apiUrl;
  breadcrumb$: Observable<BreadcrumbDefinition[]>;

  constructor(private bcService: BreadcrumbService, private basketService: BasketService, private accountService: AccountService, private shopService: ShopService) { }

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    const token = localStorage.getItem ('token');
    this.accountService.loadCurrentUser(token).subscribe (() => {
      console.log ('loaded user');
    }, error => {
      console.log (error);
    });
  }

  loadBasket(){
    this.breadcrumb$ = this.bcService.breadcrumbs$;
    const basketId = localStorage.getItem('basket_id');
    if(basketId){
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('initialised basket');
      }, error => {
        console.log(error);
      });
    }
  }
}
