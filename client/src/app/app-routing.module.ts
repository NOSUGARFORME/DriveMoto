import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { TestErrorComponent } from './core/test-error/test-error.component';
import {ServerErrorComponent} from "./core/server-error/server-error.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {ComingSoonComponent} from "./core/coming-soon/coming-soon.component";

const routes: Routes = [
  {path: '', component: HomeComponent, data:{breadcrumb: 'Главная'}},
  {path: 'test-errors', component: TestErrorComponent, data:{breadcrumb: 'Test Errors'}},
  {path: 'server-errors', component: ServerErrorComponent, data:{breadcrumb: 'Ошибка сервера'}},
  {path: 'not-found', component: NotFoundComponent, data:{breadcrumb: 'Не найдено'}},
  {path: 'coming-soon', component: ComingSoonComponent, data:{breadcrumb: 'Coming soon'}},
  {
    path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule),
    data:{breadcrumb: 'Магазин'}
  },
  {
    path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
    data:{breadcrumb: 'Корзина'}
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule),
    canActivate: [AuthGuard],
    data:{breadcrumb: 'Оформление заказа'}},
  {
    path: 'orders',
    canActivate: [AuthGuard],
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule),
    data: { breadcrumb: 'Заказы' }
  },
  {path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
    data:{breadcrumb: {skip: true}}},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
