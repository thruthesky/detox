import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { Router } from '@angular/router';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';
import {ComponentService} from "./component.service";


@Injectable()
export class FirebaseService {

    token = '';
    constructor(
        private afMessaging: AngularFireMessaging,
        public router: Router,
        public wp: WordpressApiService,
        public cs: ComponentService
    ) {
        wp.userChange.subscribe(user => {
            if (!user) {
                // consoe.log('user is null');
                return;
            }
            // console.log('user.eventType: ', user.eventType);

            if (this.token) {
                wp.tokenUpdate(this.token).subscribe(res => {
                    // consoe.log('token subscribe', res);
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

        this.wp.tokenUpdate(this.token).subscribe(res => {
            // consoe.log('res: ', res);
        }, e => {
            console.error(e);
            alert('푸시 알림 토큰 등록 실패!');
        });
        this.wp.subscribeTopic('7detox', this.token).subscribe( res => {
            // console.log('subscribe topic res: ', res);
            // consoe.log('subscribe topic res: ', res);
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

        // console.log(`toast notification`, message);
        this.cs.toast({
            message: message['title'],
            duration: 12000,
            buttons: [
                {
                    side: 'start',
                    icon: 'notifications',
                    handler: () => {
                        // console.log('icon:notifications::');
                        this.onClick_Action(message);
                    }
                },
                {
                    text: 'View',
                    role: 'view',
                    handler: () => {
                        // console.log('role:view::');
                        this.onClick_Action(message);
                    }
                }
            ]
        });
    }

    onClick_Action(message) {
        if (!message.click_action) {
            return;
        }
        const clickAction = message.click_action.split('/').pop();
        this.router.navigateByUrl(clickAction);
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
