import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersControllerService {

  readonly NETWORK_DELAY_TIME_MILLI = 777;
  readonly MOCK_DATA_1: Customer[] = [
    {
      id: 123,
      name: 'Nike',
      firstTime: false
    },
    {
      id: 345,
      name: 'Adidas',
      firstTime: false
    }, {
      id: 567,
      name: 'Reebok',
      firstTime: true
    }
  ];

  getCustomers(apiVersion: string) {
    return of(this.MOCK_DATA_1).pipe(delay(this.NETWORK_DELAY_TIME_MILLI));
  }

}