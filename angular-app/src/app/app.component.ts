import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory Manager';
  constructor(private _http: HttpService){}
}
