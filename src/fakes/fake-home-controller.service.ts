import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeHomeControllerService {

  readonly NETWORK_DELAY_TIME_MILLI = 777;
  readonly MOCK_DATA_1 = [{ id: 123, name: 'abc' }, { id: 345, name: 'cde' }, { id: 567, name: 'efg' }];

  getHomeData(apiVersion: string) {
    return of(this.MOCK_DATA_1).pipe(delay(this.NETWORK_DELAY_TIME_MILLI));
  }

}