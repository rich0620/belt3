import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newProduct: any;
  error: any;

  constructor(private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.populateEditField(params['id']));
    this.newProduct = {name: "", quantity: "", price: ""}
  }

  populateEditField(id){
    let observable = this._http.getOneProduct(id);
    observable.subscribe(data => {
      if(data['error']){
        this.error = data['error'];
      }
      else{
        this.newProduct = data['data'];
      }
    })
  }

  editProductFromService(){
    let observable = this._http.updateProduct(this.newProduct);
    observable.subscribe(data => {
      if(data['error']){
        this.error = data['error'];
      }
      else{
        this._router.navigate(['/home']);
      }
    })
  }
}
