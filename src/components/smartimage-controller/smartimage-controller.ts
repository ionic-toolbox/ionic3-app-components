import { Injectable }					from '@angular/core';
import { Content, Events }				from 'ionic-angular';

import { SmartImage }					from '../smart-image/smart-image';

@Injectable()
export class SmartImageController {
	smtImages: SmartImage[];
	content: Content;

	constructor(public events: Events) {
		this.smtImages = [];
	}

	iniLazyLoad(content: Content) {
		this.content = content;

		this.events.subscribe('smartimage', params => {
			this.smtImages.push(params);
		});

		this.content.ionScroll.subscribe(
			event => {
				this.smtImages.forEach(image => {
					image.scrollNotify();
				}
				);
			});
	}

}
