import { NgModule }						from '@angular/core';
import { IonicModule }					from 'ionic-angular';
import { PickerController }				from 'ionic-angular';

import { SampleComponent }				from './sample/sample';

import { ResponsibleItem }				from './responsible-item/responsible-item';
import { SmartImage }					from './smart-image/smart-image';
// import { SmartImageController }			from './smartimage-controller/smartimage-controller';
import { SmartImageDetector }			from './smartimage-detector/smartimage-detector';
import { ScrollFooter }					from './scroll-footer/scroll-footer';
import { SelectableFab }				from './selectable-fab/selectable-fab';
import { Accordion }					from './accordion/accordion';
import { AccdTitle, AccdContent, AccdItem } from './accordion/accordion';

import { PickerContainer }				from './picker-controller/picker-controller';
import { PickerModalController }		from './picker-controller/picker-controller';
import { RatingComponent }				from './rating/rating';


@NgModule({
	declarations: [
		SampleComponent,
		ResponsibleItem, 
		SmartImage, SmartImageDetector, // SmartImageController
		ScrollFooter, SelectableFab, Accordion, AccdTitle, AccdContent, AccdItem,
		PickerContainer,
    RatingComponent // , PickerModalController
	],
	imports: [
		IonicModule
	],
	exports: [
		SampleComponent,
		ResponsibleItem, 
		SmartImage, SmartImageDetector, //SmartImageController
		ScrollFooter, SelectableFab, Accordion, AccdTitle, AccdContent, AccdItem,
		PickerContainer,
    RatingComponent // , PickerModalController
	]
})
export class ComponentsModule { }
