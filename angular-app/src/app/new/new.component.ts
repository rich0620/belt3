import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  error: any;

  constructor(private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newProduct = {name: "", quantity: "", price: ""}
  }

  addProductFromService(){
    let observable = this._http.newProduct(this.newProduct);
    observable.subscribe(data => {
      if(data['error']){
        console.log('Naw dawg', data['error'])
        this.error = data['error'];
      }
      else{
        console.log('New Product Added', data);
        this.newProduct = {name: "", quantity: "", price: ""}
        this._router.navigate(['/home']);
      }
    })
  }
}
