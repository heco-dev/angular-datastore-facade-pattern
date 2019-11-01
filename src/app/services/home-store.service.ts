import { Injectable } from '@angular/core';
import { SimpleStore } from '../../externals/simple-store';

@Injectable({
    providedIn: 'root'
})
export class HomeStoreService {

    readonly home = new SimpleStore<any[]>();

    constructor() { }

    setData(data: any[]) {
        this.home.setState(data);
    }

    getData() {
        return this.home.state$;
    }

}
