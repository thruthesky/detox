import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {

    lang = 'en';
    constructor() { }


    t(obj: { en?: string, ko?: string }) {
        return obj[this.lang];
    }
}
