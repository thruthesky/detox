import { Injectable } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';
import { environment } from 'src/environments/environment';
import { ErrorObject } from 'modules/wordpress-api/services/wordpress-api.interface';
import { Router } from '@angular/router';
import { AlertOptions } from '@ionic/core';
import { DomSanitizer } from '@angular/platform-browser';
import { pageCode } from './page-code';
import { FirebaseService } from './firebase.service';
import { IonService } from 'modules/wordpress-api/components/shared/ion-service/ion-service';

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
        private domSanitizer: DomSanitizer,
        public firebase: FirebaseService,
        private ion: IonService
    ) {
        if (!this.env.lang) {
            this.env.lang = this.getBrowserLanguage();
        }

        // initialize firebase
        this.firebase.init();

        // console.log(`production`, this.env.production);
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
        const popup = await this.alertController.create(options);
        popup.present();
        return popup.onWillDismiss();
    }


    async confirm(options: AlertOptions) {
        if (!options.buttons) {
            options.buttons = [
                { text: this.t({ en: 'Yes', ko: '예' }), role: 'yes' },
                { text: this.t({ en: 'No', ko: '아니오' }), role: 'no' },
            ];
        }
        return this.alert(options);
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


    /**
     * Adds '0' infront of the `n` if the `n` is smaller than 10.
     * @param n numbre
     * @example
     *      add0(1);
     *      - input:  1
     *      - output: 01
     */
    add0(n: number): string {
        if (isNaN(n)) {
            return '00';
        }
        return n < 10 ? '0' + n : n.toString();
    }


    async resign() {
        const re = await this.ion.alertConfirm({ message: this.t({ en: 'Ooh! Do you want to resign?', ko: '앗! 정말 회원 탈퇴를 하시겠습니까?' }) });
        if (!re) {
            return;
        }
        this.wp.resign().subscribe(user => {
            console.log('resigned user: ', user);
            this.alert({ message: this.t({ ko: '회원 탈퇴를 하였습니다.', en: 'You have resigned.' }) });
            this.openHome();
        }, e => this.error(e));
    }
}



