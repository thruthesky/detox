import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { Router } from '@angular/router';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';


@Injectable()
export class FirebaseService {

    token = '';
    constructor(
        private afMessaging: AngularFireMessaging,
        public router: Router,
        public wp: WordpressApiService
    ) {
        wp.userChange.subscribe(user => {
            if (!user) {
                console.log('user is null');
                return;
            }

            // console.log('user.eventType: ', user.eventType);

            if (this.token) {
                wp.tokenUpdate(this.token).subscribe(res => {
                    console.log('token subscribe', res);
                }, e => {
                    console.error(e);
                    alert('푸시 알림 토큰 업데이트 실패!');
                });
            }
        });
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
     * @note This method is called on every app bootting(refresh)
     * @note this runs on every app-boot & when token changes.
     *
     */
    async saveNewTokenToBackend() {
        // console.log(`save token:`, this.token);

        //
        this.wp.tokenUpdate(this.token).subscribe(res => {
            // console.log('res: ', res);
        }, e => {
            console.error(e);
            alert('푸시 알림 토큰 등록 실패!');
        });
        this.wp.subscribeTopic('7detox', this.token).subscribe( res => {
            // console.log('subscribe topic res: ', res);
        }, e => {
            console.error(e);
        });
    }

    // async deleteTokenFromBackend() {
    //     console.log(`delete token`, token);
    // }


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
                    this.token = token;
                    this.saveNewTokenToBackend();
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
                // console.log('webListenMessage::', res);
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
