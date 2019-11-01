import { Injectable } from '@angular/core';
import { SimpleStore } from '../../externals/simple-store';
import { Customer } from '../models/customer';

@Injectable({
    providedIn: 'root'
})
export class CustomersStoreService {

    readonly customers = new SimpleStore<Customer[]>();

    constructor() { }

    setCustomers(data: any[]) {
        this.customers.setState(data);
    }

    getCustomers() {
        return this.customers.state$;
    }

}
