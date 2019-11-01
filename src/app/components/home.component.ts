import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeStoreService } from '../services/home-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  welcomeText = 'Hello,';

  homeData$: Observable<any>;

  constructor(
    readonly homeStoreSvc: HomeStoreService
  ) {
    this.homeData$ = this.homeStoreSvc.getData();
  }

}
