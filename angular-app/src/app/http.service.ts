import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/products');
  }

  newProduct(product){
    return this._http.post('/products', product);
  }

  deleteProduct(id){
    return this._http.delete('/products/' + id);
  }

  getOneProduct(id){
    return this._http.get('/products/' + id);
  }

  updateProduct(product){
    return this._http.put('/products/' + product._id, product);
  }

}
