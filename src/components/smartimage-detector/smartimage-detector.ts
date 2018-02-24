import { Directive, ElementRef }		from '@angular/core';
import { HostListener, }				from '@angular/core';
import { Input, Renderer }				from '@angular/core';

import { Events }						from 'ionic-angular';
import { SmartImage }					from '../smart-image/smart-image';

@Directive({
	selector: '[smartimagedetector]'
})
export class SmartImageDetector {

	_fixedEle: HTMLElement;
	_scrollEle: HTMLElement;

	_pageEle: HTMLElement;

	smtImages: SmartImage[];

	constructor(
		public el: ElementRef,
		public renderer: Renderer,
		public events: Events,
	) {
		this.smtImages = [];
	}

	ngOnInit(): void {
		let children = this.el.nativeElement.children;

		this._fixedEle = children[0];
		this._scrollEle = children[1];

		this._scrollEle.addEventListener('scroll', () => {
			this.smtImages.forEach(image => {
				image.scrollNotify();
			})
		});

		this.events.subscribe('smartimage', params => {
			this.smtImages.push(params);
		});
	}

}
