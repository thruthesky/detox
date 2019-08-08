import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { Router } from '@angular/router';


@Injectable()
export class FirebaseService {

    token = '';
    constructor(
        private afMessaging: AngularFireMessaging,
        public router: Router
    ) {
    }

    init() {
        this.saveToken();
        this.listenMessage();
    }

    saveToken() {
        this.webSaveToken();
    }

    /**
     * Saves token to backend.
     * @note this runs on every app-boot & when token changes.
     *
     */
    async saveTokenToBackend(token: string, topic = '7detox') {
        console.log(`save token:`, token);
    }

    async deleteTokenFromBackend(token: string, topic = '7detox') {
        console.log(`delete token`, token);
    }


    listenMessage() {
        this.webListenMessage();
    }

    async webSaveToken() {
        if (!this.isPushNotificationSupported()) {
            return;
        }

        const status = Notification['permission'];
        // console.log(Notification.permission);
        if (status === 'denied') {
            // console.log(location.origin);
            return;
        }


        /**
         * When user accepted the request
         */
        this.afMessaging.requestToken
            .subscribe(
                (token) => {
                    this.saveTokenToBackend(token);
                },
                (error) => { console.log(error); },
            );
    }

    toastNotificationMessage(message: any) {

        if (!message || !message.click_action) {
            return;
        }
        console.log(`toast notification`, message);
    }

    onClick_Action(message) {
        if (!message.click_action) {
            return;
        }
        console.log(`navigate notification`, message);
    }


    webListenMessage() {
        if (!this.isPushNotificationSupported()) {
            return;
        }
        this.afMessaging.messages
            .subscribe((res) => {
                console.log('webListenMessage::', res);
                this.toastNotificationMessage(res['notification']);
            });
    }

    isPushNotificationSupported(): boolean {

        if ('Notification' in window) {
            // API supported
            return true;
        } else {
            // API not supported
            return false;
        }
    }


}
