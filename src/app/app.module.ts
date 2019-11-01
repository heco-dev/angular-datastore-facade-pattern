import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CustomersComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
