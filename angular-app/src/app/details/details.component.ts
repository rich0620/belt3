import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: any;
  error;

  switch: boolean;

  constructor(private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.getProductFromService(params['id']));
    this.product = {name: "", quantity: "", price: ""}
  
  }

  getProductFromService(id){
    let observable = this._http.getOneProduct(id);
    observable.subscribe(data => {
      this.product = data['data'];
      if(this.product.quantity == 0){
        this.switch = false;
      }
      else{
        this.switch = true;
      }
    })
  }

  deleteFromService(id, qty){
    if(qty > 0){
      this.error = 'Cannot Delete until product is sold out';
      return;

    }
    else {
      let observable = this._http.deleteProduct(id);
      observable.subscribe(data => {
        this._router.navigate(['/home']);
      })
    }
  }
}
