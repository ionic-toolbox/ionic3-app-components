import { Platform }						from 'ionic-angular';
import { Menu, Config }					from 'ionic-angular';
import { Nav, NavController  }			from 'ionic-angular';
import { NgZone }						from '@angular/core';

import { Component, ViewChild }			from '@angular/core';
import { StatusBar }					from '@ionic-native/status-bar';
import { SplashScreen }					from '@ionic-native/splash-screen';

// Blocks
import { HomePage }						from '../pages/home/home';
import { TabsPage }						from '../pages/tabs/tabs';

import { ComponentsModule }				from '../components/components.module';

import * as helpers						from '../directives/helpers';


@Component({
	templateUrl: 'app.html'
})
export class MainApp {
	@ViewChild(Nav) nav: Nav;
	@ViewChild('content') content: NavController;
	@ViewChild(Menu) menu: Menu;
	
	rootPage: any = TabsPage;

	nextPage: any;
	currentPlatform: string = 'ios';
	currentPageIndex: number = 1;

	pages: Array<{ title: string, component: any }>;

	constructor(
		public platform: Platform, 
		public statusBar: StatusBar, 
		public splashScreen: SplashScreen, 
		public config: Config,
		public zone: NgZone) {

		console.log('MainApp: constructor')

		this.initializeApp();

		this.pages = [
			{ title: 'Home', component: HomePage },
		];
	}

	initializeApp() {
		console.log('MainApp: initializeApp')

		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
	
	openPage(page) {
		console.log('MainApp: openPage')

		this.nav.setRoot(page.component);
	}

	previousSection() {
		console.log('MainApp: previousSection')

		let previousPage = this.currentPageIndex - 1;
		if (previousPage < 0) {
			previousPage = 0;
		}
		let pageName = Object.keys(helpers.getPages())[previousPage];
		this.content.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
		this.currentPageIndex = previousPage;
	}

	nextSection() {
		console.log('MainApp: nextSection')

		let nextPage = this.currentPageIndex + 1;
		const pageList = Object.keys(helpers.getPages());
		if (nextPage >= pageList.length) {
			nextPage = pageList.length - 1;
		}
		let pageName = pageList[nextPage];
		this.content.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
		this.currentPageIndex = nextPage;
	}

	openIonicComponentsPage(page) {
		console.log('MainApp: openIonicComponentsPage')

		helpers.debounce(this.content.setRoot(page.component), 60, false);
	}
}
