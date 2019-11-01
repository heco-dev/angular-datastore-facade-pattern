import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersControllerService {

  readonly NETWORK_DELAY_TIME_MILLI = 777;
  readonly MOCK_DATA_1: Customer[] = [{ id: 123, name: 'Nike' }, { id: 345, name: 'Adidas' }, { id: 567, name: 'Reebok' }];

  getCustomers(apiVersion: string) {
    return of(this.MOCK_DATA_1).pipe(delay(this.NETWORK_DELAY_TIME_MILLI));
  }

}