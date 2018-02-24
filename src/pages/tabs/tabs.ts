import { Component } 					from '@angular/core';

import { HomePage }						from '../home/home';
import { LayoutsPage } 					from '../layouts/layouts';
import { ContactPage } 					from '../contact/contact';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tab1Root: any = HomePage;
	tab2Root: any = LayoutsPage;
	tab3Root: any = ContactPage;

	constructor() {

	}
}
