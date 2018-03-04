import { Component, ViewChild }			from '@angular/core';
import { NavController }				from 'ionic-angular';
import { Toast, ToastController }		from 'ionic-angular';
import { IonicPage }					from 'ionic-angular';
import { Content }						from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-rating',
	templateUrl: 'rating.html'
})
export class RatingPage {
	@ViewChild('mycontent') content: Content;

	cards = [
		{
			avatarImageUrl: 'assets/rating/img/avatar/marty-avatar.png',
			postImageUrl: 'assets/rating/img/card/advance-card-bttf.png',
			name: 'Marty Mcfly',
			postText: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
			date: 'November 5, 1955',
			likes: 12,
			comments: 4,
			timestamp: '11h ago',
			rating: {
				value: 5
			}
		},
		{
			avatarImageUrl: 'assets/rating/img/avatar/sarah-avatar.jpg',
			postImageUrl: 'assets/rating/img/card/advance-card-tmntr.jpg',
			name: 'Sarah Connor',
			postText: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.',
			date: 'May 12, 1984',
			likes: 30,
			comments: 64,
			timestamp: '30yr ago'
		},
		{
			avatarImageUrl: 'assets/rating/img/avatar/ian-avatar.png',
			postImageUrl: 'assets/rating/img/card/advance-card-jp.jpg',
			name: 'Dr. Ian Malcolm',
			postText: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.',
			date: 'June 28, 1990',
			likes: 46,
			comments: 66,
			timestamp: '2d ago',
			rating: {
				value: 5
			}
		},
	];

	constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
		console.log('RatingPage: constructor')
	}


	notimplemented() {
		let toast = this.toastCtrl.create({
			message: 'Function not implemented',
			duration: 3000
		});
		toast.present();
	}

	like(card) {
		this.notimplemented()
	}

	comment(card) {
		this.notimplemented()

	}
}
