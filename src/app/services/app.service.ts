import { Injectable } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';
import { environment } from 'src/environments/environment';
import { ErrorObject, Files } from 'modules/wordpress-api/services/wordpress-api.interface';
import { Router } from '@angular/router';
import { AlertOptions } from '@ionic/core';
import { DomSanitizer } from '@angular/platform-browser';
import { pageCode } from './page-code';

@Injectable({ providedIn: 'root' })
export class AppService {


    pageCode = pageCode;
    uploadPercent: number;

    env = environment;
    anonymousPhotoUrl = '/assets/img/anonymous.jpg';
    constructor(
        private router: Router,
        private sideMenu: MenuController,
        public wp: WordpressApiService,
        private alertController: AlertController,
        private domSanitizer: DomSanitizer
    ) {
        if (!this.env.lang) {
            this.env.lang = this.getBrowserLanguage();
        }
    }


    t(obj: { en?: string, ko?: string }) {
        return obj[this.env.lang];
    }

    keys(obj: any): any[] {
        if (obj) {
            return Object.keys(obj);
        } else {
            return [];
        }
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

    error(e: ErrorObject): void {
        console.error('Got error on app.service.ts::e => ', e);
        this.alert({ header: this.t({ en: 'Ooh...!', ko: '앗...!' }), message: e.errstring });
    }


    /**
     * This simply alerts.
     * @param options Ionic Alert Options
     */
    async alert(options: AlertOptions) {
        if (!options.buttons) {
            options.buttons = [{ text: this.t({ en: 'Confirm', ko: '확인' }) }];
        }
        (await this.alertController.create(options)).present();
    }


    open(url: string): void {
        this.router.navigateByUrl(url);
    }

    openHome(): void {
        this.open('/');
    }

    logout(): void {
        this.wp.logout();
        this.open('/');
    }



    safeHtml(str: string) {
        return this.domSanitizer.bypassSecurityTrustHtml(str);
    }

   

}



