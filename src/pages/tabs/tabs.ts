import { Component } 					from '@angular/core';

import { HomePage }						from '../home/home';
import { LayoutsPage } 					from '../layouts/layouts';
import { IonicComponentsPage } 			from '../ionic-components/ionic-components';

import { ActionSheetsPage as BasicPage }	from '../../pages-ionic-components/action-sheets/page';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tab1Root: any = HomePage;
	tab2Root: any = LayoutsPage;
	tab3Root: any = BasicPage;

	constructor() {

	}
}
