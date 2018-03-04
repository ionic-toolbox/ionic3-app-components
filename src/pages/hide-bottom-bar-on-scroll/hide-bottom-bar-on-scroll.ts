import { Component }					from '@angular/core';
import { NavController }				from 'ionic-angular';

@Component({
	selector: 'page-hide-bottom-bar-on-scroll',
	templateUrl: 'hide-bottom-bar-on-scroll.html'
})
export class HideBottomBarOnScrollPage {

	constructor(public navCtrl: NavController) { }

	ionViewDidLoad() {
		console.log('HideBottomBarOnScrollPage Page');
	}

	scrollHandler() {
		console.log('scrolled!');
	}

}
