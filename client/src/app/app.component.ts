import { Component, OnInit } from '@angular/core';
import {BreadcrumbDefinition, BreadcrumbService} from "xng-breadcrumb";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SkiNet';
  breadcrumb$: Observable<BreadcrumbDefinition[]>;

  constructor(private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.bcService.breadcrumbs$
  }
}
