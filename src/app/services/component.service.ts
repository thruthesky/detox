import { Injectable } from '@angular/core';
import { ToastOptions } from '@ionic/core';
import { ToastController } from '@ionic/angular';
// import { AppService } from './app.service';


@Injectable({ providedIn: 'root' })
export class ComponentService {


    constructor(
        // private a: AppService,
        private toastController: ToastController,
        // private alertController: AlertController
    ) {
    }


    async toast(options: ToastOptions) {
        options.showCloseButton = true;
        if (!options.closeButtonText) {
            options.closeButtonText = '닫기';
        }
        const toast = await this.toastController.create(options);
        toast.present();

        return await toast.onDidDismiss();
    }



}
