import { Component, ViewChild }			from '@angular/core';
import { Nav, Platform }				from 'ionic-angular';
import { StatusBar }					from '@ionic-native/status-bar';
import { SplashScreen }					from '@ionic-native/splash-screen';

// Blocks
import { HomePage }						from '../pages/home/home';
import { TabsPage }						from '../pages/tabs/tabs';

import { ComponentsModule }				from '../components/components.module';


@Component({
	templateUrl: 'app.html'
})
export class MainApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = TabsPage;

	pages: Array<{ title: string, component: any }>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		this.pages = [
			{ title: 'Home', component: HomePage },
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}
}
