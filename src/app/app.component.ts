import { Component } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    readonly homeSvc: HomeService
  ) {
    this.homeSvc.getData();
  }

}
