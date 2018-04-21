import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];

  constructor(private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService(){
    let observable = this._http.getProducts();
    observable.subscribe(data => {
      this.products = data['products'];
    })
  }
}
