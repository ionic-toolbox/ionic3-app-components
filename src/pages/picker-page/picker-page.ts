import { Component }					from '@angular/core';
import { NavController }				from 'ionic-angular';

import {PickerModalController}			from '../../components/picker-controller/picker-controller';
import {MockPickerContent}				from './mock-picked';

/*
  Picker page...
*/
@Component({
	selector: 'page-picker-page',
	templateUrl: 'picker-page.html'
})
export class PickerPage {

	constructor(
		public navCtrl: NavController,
		public modCtrl: PickerModalController,
	) { }

	ionViewDidLoad() {
		console.log('PickerPage');
	}

	openPicker() {
		let picker = this.modCtrl.create(MockPickerContent);
		picker.present();
	}

}
