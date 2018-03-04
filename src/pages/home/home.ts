import { Component }					from '@angular/core';
import { NavController }				from 'ionic-angular';

import { SmartImagePage }				from '../smartimage-page/smartimage-page';
import { AccordionPage }				from '../accordion/accordion';
import { HideBottomBarOnScrollPage }	from '../hide-bottom-bar-on-scroll/hide-bottom-bar-on-scroll';
import { LayoutsPage }					from '../layouts/layouts';
import { LazyimgPage }					from '../lazyimg-page/lazyimg-page';
import { PickerPage }					from '../picker-page/picker-page';
import { TopiconBtnPage }				from '../topicon-btn/topicon-btn';
import { TabsPage }						from '../tabs/tabs';
import { SelectFabPage }				from '../select-fab/select-fab';
import { RatingPage }					from '../rating/rating';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

	}

	openSmartImagePage()		{ this.navCtrl.push(SmartImagePage);				}
	openLazyImagePage()			{ this.navCtrl.push(LazyimgPage);					}
	openHideableBarPage()		{ this.navCtrl.push(HideBottomBarOnScrollPage);		}
	openSelectableFabtnPage()	{ this.navCtrl.push(SelectFabPage);					}
	openTopIconButtonPage()		{ this.navCtrl.push(TopiconBtnPage);				}
	openAccordionPage()			{ this.navCtrl.push(AccordionPage);					}
	openPickerPage()			{ this.navCtrl.push(PickerPage);					}
	openRatingPage()			{ this.navCtrl.push(RatingPage); 					}
}
