import { BrowserModule }				from '@angular/platform-browser';
import { ErrorHandler, NgModule } 		from '@angular/core';
import { IonicApp, IonicModule } 		from 'ionic-angular';
import { IonicErrorHandler }			from 'ionic-angular';

import { StatusBar }					from '@ionic-native/status-bar';
import { SplashScreen }					from '@ionic-native/splash-screen';

import { MainApp }						from './app.component';
import { HomePage }						from '../pages/home/home';
import { ListPage }						from '../pages/list/list';

// Modules
import { ComponentsModule }				from '../components/components.module';
import { DirectivesModule }				from '../directives/directives.module';

// Provider
import { SampleProvider }				from '../providers/sample/sample';

// Pages
import { SmartImagePage }				from '../pages/smartimage-page/smartimage-page';
import { AccordionPage }				from '../pages/accordion-page/accordion-page';
import { ContactPage }					from '../pages/contact/contact';
import { HideftPage }					from '../pages/hideft-page/hideft-page';
import { LayoutsPage }					from '../pages/layouts/layouts';
import { LazyimgPage }					from '../pages/lazyimg-page/lazyimg-page';
import { PickerPage }					from '../pages/picker-page/picker-page';
import { MockPickerContent } 			from '../pages/picker-page/mock-picked';
import { TopiconBtnPage }				from '../pages/topicon-btn/topicon-btn';
import { TabsPage }						from '../pages/tabs/tabs';
import { SelectFabPage }				from '../pages/select-fab/select-fab';

@NgModule({
	declarations: [
		MainApp,
		HomePage, ListPage,

		// Pages
		SmartImagePage, ContactPage, HideftPage, LayoutsPage, LazyimgPage, PickerPage, MockPickerContent, TopiconBtnPage, TabsPage, AccordionPage, SelectFabPage,
	],
	imports: [
		BrowserModule,
		ComponentsModule,
		DirectivesModule,

		IonicModule.forRoot(MainApp, { backButtonText: '', tabsHideOnSubPages: "true" })
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MainApp,
		HomePage, ListPage,
		SmartImagePage,
		AccordionPage,
		ContactPage,
		HideftPage, LayoutsPage,
		LazyimgPage,
		PickerPage,
		TopiconBtnPage,
		TabsPage,
		SelectFabPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		SampleProvider
	]
})
export class AppModule { }
