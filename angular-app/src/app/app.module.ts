import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    EditComponent,
    AddComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
