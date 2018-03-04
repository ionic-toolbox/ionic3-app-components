import { Component }					from '@angular/core';

import { ToastController }				from 'ionic-angular';


@Component({
	templateUrl: 'page.html'
})
export class ButtonsPage {
	colors = [ "light", "default", "secondary", "danger", "dark" ]

	constructor(public toastCtrl: ToastController){

	}
	

	itemTapped(item) {
		let toast = this.toastCtrl.create({
			message: 'Function not implemented',
			duration: 3000
		});
		toast.present();

	}
}
