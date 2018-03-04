import { Component }					from '@angular/core';
import { NavController }				from 'ionic-angular';

@Component({
	selector: 'page-accordion',
	templateUrl: 'accordion.html'
})
export class AccordionPage {

	constructor(public navCtrl: NavController) {
		console.log('AccordionPage: constructor')
	}

	ionViewDidLoad() {
		console.log('AccordionPage: ionViewDidLoad');
	}
}
