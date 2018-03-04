import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ion-rating',
	templateUrl: 'rating.html'
})
export class RatingComponent {

	@Input() numStars: number = 5;
	@Input() readOnly: boolean = false;
	@Input() value: number = 5;

	@Output() clicked: EventEmitter<number> = new EventEmitter<number>();

	stars: string[] = [];

	constructor() { 
		console.log('RatingComponent: constructor')
		this.calc(); }

	ngAfterViewInit() {
		console.log('RatingComponent: ngAfterViewInit')
	}

	calc() {
		console.log('RatingComponent: calc')

		this.stars = [];
		let tmp = this.value;
		for (let i = 0; i < this.numStars; i++ , tmp--)
			if (tmp >= 1)
				this.stars.push("star");
			else if (tmp < 1 && tmp > 0)
				this.stars.push("star-half");
			else
				this.stars.push("star-outline");

		console.log('RatingComponent: calc start=' + this.stars)
	}

	itemSelected(index) {
		console.log('RatingComponent: itemSelected')

		if (!this.readOnly) {
			console.log('RatingComponent: itemSelected rate')
			this.value = index + 1;
			this.calc();
			this.clicked.emit(this.value);
		} else {
			console.log('RatingComponent: itemSelected READONLY')
		}
	}
}
