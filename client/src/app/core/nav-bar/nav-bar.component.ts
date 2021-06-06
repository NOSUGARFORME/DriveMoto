import { Component, OnInit } from '@angular/core';
import {BasketService} from "../../basket/basket.service";
import {Observable} from "rxjs";
import {IBasket} from "../../shared/models/basket";
import {IUser} from "../../shared/models/user";
import {AccountService} from "../../account/account.service";
import {environment} from "../../../environments/environment";
import {IType} from "../../shared/models/productType";
import {ShopService} from "../../shop/shop.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  baseUrl = environment.apiUrl;
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;
  types: IType[] = [];

  constructor(private basketService: BasketService, private accountService: AccountService, private shopService: ShopService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
    this.getTypes();
  }

  logout(){
    this.accountService.logout();
  }

  getTypes() {
    this.shopService.getTypes().subscribe(response => {
      this.types = response;
    }, error => {
      console.log(error);
    })
  }
}
