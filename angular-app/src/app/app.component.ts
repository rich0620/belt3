import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  template: `
        <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
        </ul>
`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Commerce Manager';
  constructor(private _http: HttpService){}
}
