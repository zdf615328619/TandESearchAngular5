import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATY-GC2b0J-8GgFc7xK8mrOX5Tm7S4RXA',
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }