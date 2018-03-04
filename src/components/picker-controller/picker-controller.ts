import { Component, ComponentFactoryResolver, HostListener, Renderer, ViewChild, ViewContainerRef } from '@angular/core';
import { ViewEncapsulation, Injectable } from '@angular/core';

import { App, ViewController, NavOptions, ModalOptions, NavParams, PickerOptions, } from 'ionic-angular';
import { BlockerDelegate, GestureController, GESTURE_MENU_SWIPE, GESTURE_GO_BACK_SWIPE } from 'ionic-angular';

export const isPresent = (val: any) => val !== undefined && val !== null;

@Component({
	selector: 'picker-controller',
	template: 'picker-controller.html',
	styles: [ 'picker-controller.scss'],
	host: {
		'role': 'dialog'
	},
	encapsulation: ViewEncapsulation.None,
})
export class PickerContainer {

	@ViewChild('viewport', { read: ViewContainerRef })
	_viewport: ViewContainerRef;

	_gestureBlocker: BlockerDelegate;

	constructor(
		public _cfr: ComponentFactoryResolver,
		public _renderer: Renderer,
		public _navParams: NavParams,
		public _viewCtrl: ViewController,
		gestureCtrl: GestureController
	) {
		console.log('PickerContainer: constructor')

		this._gestureBlocker = gestureCtrl.createBlocker({
			disable: [GESTURE_MENU_SWIPE, GESTURE_GO_BACK_SWIPE]
		});
	}

	ionViewPreLoad() {
		console.log('PickerContainer: ionViewPreLoad')

		this._load(this._navParams.data.component);
	}

	_load(component: any) {
		console.log('PickerContainer: _load')

		if (!component) return;

		const componentFactory = this._cfr.resolveComponentFactory(component);

		// ******** DOM WRITE ****************
		const componentRef = this._viewport.createComponent(componentFactory, this._viewport.length, this._viewport.parentInjector, []);
		this._viewCtrl._setInstance(componentRef.instance);

		this._viewCtrl.willEnter.subscribe(this._viewWillEnter.bind(this));
		this._viewCtrl.didLeave.subscribe(this._viewDidLeave.bind(this));
	}

	bdClick() {
		this.dismiss('backdrop');
	}

	btnClick() {
		this.dismiss('backdrop');
	}

	dismiss(role: any): Promise<any> {
		return this._viewCtrl.dismiss(null, role);
	}

	_viewWillEnter() {
		this._gestureBlocker.block();
	}

	_viewDidLeave() {
		this._gestureBlocker.unblock();
	}

	/** @private */
	_setCssClass(componentRef: any, className: string) {
		this._renderer.setElementClass(componentRef.location.nativeElement, className, true);
	}

	ngOnDestroy() {
		this._gestureBlocker.destroy();
	}

}

export class PickerModal extends ViewController {

	private _app: App;

	constructor(app: App, component: any, data: any, opts: ModalOptions = {}) {
		data = data || {};
		data.component = component;
		opts.showBackdrop = isPresent(opts.showBackdrop) ? !!opts.showBackdrop : true;
		opts.enableBackdropDismiss = isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;
		data.opts = opts;
		opts.enableBackdropDismiss = isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;

		super(PickerContainer, data, null);
		this._app = app;
		this.isOverlay = true;
	}

	/**
	* @private
	*/
	getTransitionName(direction: string) {
		let key = (direction === 'back' ? 'pickerLeave' : 'pickerEnter');
		return this._nav && this._nav.config.get(key);
	}

	/**
	 * Present the picker instance.
	 *
	 * @param {NavOptions} [opts={}] Nav options to go with this transition.
	 * @returns {Promise} Returns a promise which is resolved when the transition has completed.
	 */
	present(navOptions: NavOptions = {}) {
		return this._app.present(this, navOptions);
	}

}

@Injectable()
export class PickerModalController {

	constructor(private _app: App) { }
	/**
	 * Create a modal to display. See below for options.
	 *
	 * @param {object} component The Modal view
	 * @param {object} data Any data to pass to the Modal view
	 * @param {object} opts Modal options
	 */
	create(component: any, data: any = {}, opts: ModalOptions = {}): PickerModal {
		return new PickerModal(this._app, component, data, opts);
	}

}
