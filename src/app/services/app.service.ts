import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {

    lang = 'en';
    constructor() { }


    t(obj: { en?: string, ko?: string }) {
        return obj[this.lang];
    }


    /**
     * Returns app page width.
     */
    pageWidth(): number {
        return window.innerWidth;
    }

    /**
     * Returns true if the width is for mobile.
     * 화면 넓이가 모바일이면 참을 리턴
     */
    get isMobile(): boolean {
        return this.pageWidth() < 768;
    }

    /**
     * Returns true if the width is for desktop.
     * 화면 넓이가 웹 넓이이면 참을 리턴
     */
    get isDesktop(): boolean {
        return !this.isMobile;
    }

}
