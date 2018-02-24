import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-smartimage-page',
	templateUrl: 'smartimage-page.html'
})
export class SmartImagePage {

	images: string[];

	constructor(public navCtrl: NavController) {
		this.images = [
			'http://www.freedigitalphotos.net/images/img/homepage/339504.jpg',
			'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
			'http://www.freedigitalphotos.net/images/img/homepage/394230.jpg',
			'http://www.freedigitalphotos.net/images/img/homepage/389590.jpg'
		];
	}

	ionViewDidLoad() {
		console.log('SmartImagePage Page');
	}

}
