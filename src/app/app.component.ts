import { Component } from '@angular/core';
import { CustomersService } from './services/customers.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    readonly homeSvc: CustomersService
  ) {
    this.homeSvc.getData();
  }

}
