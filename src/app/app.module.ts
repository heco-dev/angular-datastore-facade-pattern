import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
