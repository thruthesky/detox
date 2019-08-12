import { Injectable } from '@angular/core';
import { ToastOptions } from '@ionic/core';
import { ToastController } from '@ionic/angular';


@Injectable({ providedIn: 'root' })
export class ComponentService {


    constructor(
        private toastController: ToastController
    ) {
    }


    async toast(options: ToastOptions) {
        options.showCloseButton = true;
        if (!options.closeButtonText) {
            options.closeButtonText = 'Close';
        }
        const toast = await this.toastController.create(options);
        toast.present();

        return await toast.onDidDismiss();
    }

}
