import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { WordpressApiService } from 'modules/wordpress-api/wordpress-api';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AppService {

    env = environment;
    constructor(
        private sideMenu: MenuController,
        public wp: WordpressApiService
    ) {
        if (!this.env.lang) {
            this.env.lang = this.getBrowserLanguage();
        }
    }


    t(obj: { en?: string, ko?: string }) {
        return obj[this.env.lang];
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

    openSideMenu() {
        this.sideMenu.open();
    }


    /**
     * Returns browser language
     *
     * @param full If it is true, then it returns the full language string like 'en-US'.
     *              Otherwise, it returns the first two letters like 'en'.
     *
     * @returns
     *      - the browser language like 'en', 'en-US', 'ko', 'ko-KR'
     *      - null if it cannot detect a language.
     *
     * @warning it returns
     *      - 'zh' for Chinese.
     *      - 'ja' for Japanese.
     *      - 'ko' for Korean.
     */
    getBrowserLanguage(full = false): string {
        const nav: any = window.navigator;
        const browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
        let ln: string = null;
        // support for HTML 5.1 "navigator.languages"
        if (Array.isArray(nav.languages)) {
            for (const language of nav.languages) {
                if (language && language.length) {
                    ln = language;
                    break;
                }
            }
        }
        // support for other well known properties in browsers
        for (const k of browserLanguagePropertyKeys) {
            const language = nav[k];
            if (language && language.length) {
                ln = language;
                break;
            }
        }
        if (ln) {
            if (full === false) {
                ln = ln.substring(0, 2);
            }
        }
        if (ln === 'zh') {
            ln = 'ch';
        } else if (ln === 'ja') {
            ln = 'jp';
        }
        return ln;
    }
}
