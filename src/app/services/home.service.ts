import { Injectable } from "@angular/core";
import { FakeHomeControllerService } from "../../fakes/fake-home-controller.service";
import { tap, take } from 'rxjs/operators';
import { HomeStoreService } from './home-store.service';

@Injectable({
  providedIn: "root"
})
export class HomeService {

  readonly API_VERSION = "2.0";

  constructor(
    readonly fakeHomeControllerSvc: FakeHomeControllerService,
    readonly homeStoreSvc: HomeStoreService
  ) { }

  getData() {
    this.fakeHomeControllerSvc.getHomeData(this.API_VERSION)
      .pipe(
        tap((data) => {
          this.homeStoreSvc.setData(data);
        }),
        take(1)
      )
      .subscribe();
  }

}
