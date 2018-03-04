import { BrowserModule }				from '@angular/platform-browser';
import { ErrorHandler, NgModule }		from '@angular/core';
import { IonicApp, IonicModule }		from 'ionic-angular';
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
import { AccordionPage }				from '../pages/accordion/accordion';
import { IonicComponentsPage }			from '../pages/ionic-components/ionic-components';
import { HideBottomBarOnScrollPage }	from '../pages/hide-bottom-bar-on-scroll/hide-bottom-bar-on-scroll';
import { LayoutsPage }					from '../pages/layouts/layouts';
import { LazyimgPage }					from '../pages/lazyimg-page/lazyimg-page';
import { PickerPage }					from '../pages/picker-page/picker-page';
import { TopiconBtnPage }				from '../pages/topicon-btn/topicon-btn';
import { TabsPage }						from '../pages/tabs/tabs';
import { SelectFabPage }				from '../pages/select-fab/select-fab';
import { RatingPage }					from '../pages/rating/rating';

// I O N I C  -  C O M P O  E N T S
import { ActionSheetsPage }				from '../pages-ionic-components/action-sheets/page';
import { AlertsPage } 					from '../pages-ionic-components/alerts/page';
import { BadgesPage }					from '../pages-ionic-components/badges/page';
import { ButtonsPage }					from '../pages-ionic-components/buttons/page';

// fabs
import { BasicPage as FabBasicPage }			from '../pages-ionic-components/fabs/basic/pages';

// cards
import { AdvancedMapPage as CardAdvancedMapPage }			from '../pages-ionic-components/cards/advanced-map/pages';
import { AdvancedSocialPage as CardAdvancedSocialPage }			from '../pages-ionic-components/cards/advanced-social/pages';
import { AdvancedWeatherPage as CardAdvancedWeatherPage }			from '../pages-ionic-components/cards/advanced-weather/pages';
import { BackgroundPage as CardBackgroundPage }			from '../pages-ionic-components/cards/background/pages';
import { BasicPage as CardBasicPage }			from '../pages-ionic-components/cards/basic/pages';
import { HeaderPage as CardHeaderPage }			from '../pages-ionic-components/cards/header/pages';
import { ImagePage as CardImagePage }			from '../pages-ionic-components/cards/image/pages';
import { ListPage as CardListPage }			from '../pages-ionic-components/cards/list/pages';

// checkboxes
import { BasicPage as CheckboxBasicPage }			from '../pages-ionic-components/checkboxes/basic/pages';

// datetime
import { BasicPage as DatetimeBasicPage }			from '../pages-ionic-components/datetime/basic/pages';

// gestures
import { BasicPage as GestureBasicPage }			from '../pages-ionic-components/gestures/basic/pages';

// grid
import { BasicPage as GridBasicPage }			from '../pages-ionic-components/grid/basic/pages';

// icons
import { BasicPage as IconBasicPage }			from '../pages-ionic-components/icons/basic/pages';

// inputs
import { BasicPage as InputBasicPage }			from '../pages-ionic-components/inputs/basic/pages';
import { FloatingPage as InputFloatingPage }			from '../pages-ionic-components/inputs/floating/pages';
import { FixedInlinePage as InputFixedInlinePage }			from '../pages-ionic-components/inputs/fixed-inline/pages';
import { InlinePage as InputInlinePage }			from '../pages-ionic-components/inputs/inline/pages';
import { InsetPage as InputInsetPage }			from '../pages-ionic-components/inputs/inset/pages';
import { PlaceholderPage as InputPlaceholderPage }			from '../pages-ionic-components/inputs/placeholder/pages';
import { StackedPage as InputStackedPage }			from '../pages-ionic-components/inputs/stacked/pages';

// lists
import { AvatarPage as ListAvatarPage }			from '../pages-ionic-components/lists/avatar/pages';
import { BasicPage as ListBasicPage }			from '../pages-ionic-components/lists/basic/pages';
import { DividersPage as ListDividersPage }			from '../pages-ionic-components/lists/dividers/pages';
import { HeadersPage as ListHeadersPage }			from '../pages-ionic-components/lists/headers/pages';
import { IconPage as ListIconPage }			from '../pages-ionic-components/lists/icon/pages';
import { InsetPage as ListInsetPage }			from '../pages-ionic-components/lists/inset/pages';
import { MultilinePage as ListMultilinePage }			from '../pages-ionic-components/lists/multiline/pages';
import { NoLinesPage as ListNoLinesPage }			from '../pages-ionic-components/lists/no-lines/pages';
import { SlidingPage as ListSlidingPage }			from '../pages-ionic-components/lists/sliding/pages';
import { ThumbnailPage as ListThumbnailPage }			from '../pages-ionic-components/lists/thumbnail/pages';

// loading
import { BasicPage as LoadingBasicPage }			from '../pages-ionic-components/loading/basic/pages';

// menu
import { BasicPage as MenuBasicPage }			from '../pages-ionic-components/menus/basic/pages';
import { PageOne as MenuPageOne }			from '../pages-ionic-components/menus/basic/pages';
import { PageTwo as MenuPageTwo }			from '../pages-ionic-components/menus/basic/pages';
import { PageThree as MenuPageThree }			from '../pages-ionic-components/menus/basic/pages';

// modals
import { BasicPage as ModalBasicPage, ModalContentPage }			from '../pages-ionic-components/modals/basic/pages';

// navigation
import { BasicPage as NavigationBasicPage, NavigationDetailsPage }			from '../pages-ionic-components/navigation/basic/pages';

// popover
import { BasicPage as PopoverBasicPage, PopoverPage as PopoverContentPage }			from '../pages-ionic-components/popovers/basic/pages';

// radios
import { BasicPage as RadioBasicPage }			from '../pages-ionic-components/radios/basic/pages';

// ranges
import { BasicPage as RangeBasicPage }			from '../pages-ionic-components/ranges/basic/pages';

// searchbar
import { BasicPage as SearchbarBasicPage }			from '../pages-ionic-components/searchbars/basic/pages';

// segments
import { BasicPage as SegmentBasicPage }			from '../pages-ionic-components/segments/basic/pages';

// selects
import { BasicPage as SelectBasicPage }			from '../pages-ionic-components/selects/basic/pages';

// slides
import { BasicPage as SlideBasicPage }			from '../pages-ionic-components/slides/basic/pages';

// tabs
import { BadgesPage as TabBadgesPage, TabBadgesContent }			from '../pages-ionic-components/tabs/badges/pages';
import { BasicPage as TabBasicPage, TabBasicContentPage }			from '../pages-ionic-components/tabs/basic/pages';
import { IconPage as TabIconPage, TabIconContentPage }			from '../pages-ionic-components/tabs/icon/pages';
import { IconTextPage as TabIconTextPage, TabIconTextContentPage }			from '../pages-ionic-components/tabs/icon-text/pages';

// toast
import { BasicPage as ToastBasicPage }			from '../pages-ionic-components/toast/basic/pages';

// toggles
import { BasicPage as ToggleBasicPage }			from '../pages-ionic-components/toggles/basic/pages';

// toolbars
import { BasicPage as ToolbarBasicPage }			from '../pages-ionic-components/toolbar/basic/pages';
import { ButtonsPage as ToolbarButtonsPage }			from '../pages-ionic-components/toolbar/buttons/pages';
import { ColorsPage as ToolbarColorsPage }			from '../pages-ionic-components/toolbar/colors/pages';
import { Page2 as ToolbarColorsPage2 }			from '../pages-ionic-components/toolbar/colors/pages';
import { Page3 as ToolbarColorsPage3 }			from '../pages-ionic-components/toolbar/colors/pages';
import { Page4 as ToolbarColorsPage4 }			from '../pages-ionic-components/toolbar/colors/pages';
import { SearchbarPage as ToolbarSearchbarPage }			from '../pages-ionic-components/toolbar/searchbar/pages';
import { SegmentPage as ToolbarSegmentPage }			from '../pages-ionic-components/toolbar/segment/pages';

// pipes
import { DisplayRoutePipe }			from '../pipes/display-route';
@NgModule({
	declarations: [
		MainApp,
		HomePage, ListPage,

		// Pages
		SmartImagePage, IonicComponentsPage, HideBottomBarOnScrollPage, LayoutsPage, LazyimgPage,
		PickerPage,
		TopiconBtnPage, TabsPage, AccordionPage, SelectFabPage,
		RatingPage,

		ActionSheetsPage,
		AlertsPage,
		BadgesPage,
		ButtonsPage,

		FabBasicPage,

		CardAdvancedMapPage,
		CardAdvancedSocialPage,
		CardAdvancedWeatherPage,
		CardBackgroundPage,
		CardBasicPage,
		CardHeaderPage,
		CardImagePage,
		CardListPage,

		CheckboxBasicPage,

		DatetimeBasicPage,

		GestureBasicPage,

		GridBasicPage,

		IconBasicPage,

		InputBasicPage,
		InputFloatingPage,
		InputFixedInlinePage,
		InputInlinePage,
		InputInsetPage,
		InputPlaceholderPage,
		InputStackedPage,

		ListAvatarPage,
		ListBasicPage,
		ListDividersPage,
		ListHeadersPage,
		ListIconPage,
		ListInsetPage,
		ListMultilinePage,
		ListNoLinesPage,
		ListSlidingPage,
		ListThumbnailPage,

		LoadingBasicPage,

		MenuBasicPage,
		MenuPageOne,
		MenuPageTwo,
		MenuPageThree,

		ModalBasicPage,
		ModalContentPage,

		NavigationBasicPage,
		NavigationDetailsPage,

		PopoverBasicPage,
		PopoverContentPage,

		RadioBasicPage,

		RangeBasicPage,

		SearchbarBasicPage,

		SegmentBasicPage,

		SelectBasicPage,

		SlideBasicPage,

		TabBadgesPage,
		TabBadgesContent,

		TabBasicPage,
		TabBasicContentPage,

		TabIconPage,
		TabIconContentPage,

		TabIconTextPage,
		TabIconTextContentPage,

		ToastBasicPage,

		ToggleBasicPage,

		ToolbarBasicPage,
		ToolbarButtonsPage,
		ToolbarColorsPage,
		ToolbarColorsPage2,
		ToolbarColorsPage3,
		ToolbarColorsPage4,
		ToolbarSearchbarPage,
		ToolbarSegmentPage,

		DisplayRoutePipe
	],
	imports: [
		BrowserModule,
		ComponentsModule,
		DirectivesModule,
		IonicModule.forRoot(MainApp, {
			statusbarPadding: true,
			backButtonText: '', tabsHideOnSubPages: "true"
		},
			{
				links: [
					{ component: ActionSheetsPage, name: 'ActionSheetsPage', segment: 'action-sheet' },
					{ component: BadgesPage, name: 'BadgesPage', segment: 'badges' },
					{ component: ButtonsPage, name: 'ButtonsPage', segment: 'buttons' },
					{ component: FabBasicPage, name: 'FabBasicPage', segment: 'fab-basic' },

					{ component: CardAdvancedMapPage, name: 'CardAdvancedMapPage', segment: 'card-advanced-map' },
					{ component: CardAdvancedSocialPage, name: 'CardAdvancedSocialPage', segment: 'card-advanced-social' },
					{ component: CardAdvancedWeatherPage, name: 'CardAdvancedWeatherPage', segment: 'card-advanced-weather' },
					{ component: CardBackgroundPage, name: 'CardBackgroundPage', segment: 'card-background' },
					{ component: CardBasicPage, name: 'CardBasicPage', segment: 'card-basic' },
					{ component: CardHeaderPage, name: 'CardHeaderPage', segment: 'card-header' },
					{ component: CardImagePage, name: 'CardImagePage', segment: 'card-image' },
					{ component: CardListPage, name: 'CardListPage', segment: 'card-list' },

					{ component: CheckboxBasicPage, name: 'CheckboxBasicPage', segment: 'checkbox-basic' },

					{ component: DatetimeBasicPage, name: 'DatetimeBasicPage', segment: 'datetime-basic' },

					{ component: GestureBasicPage, name: 'GestureBasicPage', segment: 'gesture-basic' },

					{ component: GridBasicPage, name: 'GridBasicPage', segment: 'grid-basic' },

					{ component: IconBasicPage, name: 'IconBasicPage', segment: 'icon-basic' },

					{ component: InputBasicPage, name: 'InputBasicPage', segment: 'input-basic' },
					{ component: InputFloatingPage, name: 'InputFloatingPage', segment: 'input-floating' },
					{ component: InputFixedInlinePage, name: 'InputFixedInlinePage', segment: 'input-fixed-inline' },
					{ component: InputInlinePage, name: 'InputInlinePage', segment: 'input-inline' },
					{ component: InputInsetPage, name: 'InputInsetPage', segment: 'input-inset' },
					{ component: InputPlaceholderPage, name: 'InputPlaceholderPage', segment: 'input-placeholder' },
					{ component: InputStackedPage, name: 'InputStackedPage', segment: 'input-stacked' },

					{ component: ListAvatarPage, name: 'ListAvatarPage', segment: 'list-avatar' },
					{ component: ListBasicPage, name: 'ListBasicPage', segment: 'list-basic' },
					{ component: ListDividersPage, name: 'ListDividersPage', segment: 'list-dividers' },
					{ component: ListHeadersPage, name: 'ListHeadersPage', segment: 'list-headers' },
					{ component: ListIconPage, name: 'ListIconPage', segment: 'list-icon' },
					{ component: ListInsetPage, name: 'ListInsetPage', segment: 'list-inset' },
					{ component: ListMultilinePage, name: 'ListMultilinePage', segment: 'list-multiline' },
					{ component: ListNoLinesPage, name: 'ListNoLinesPage', segment: 'list-no-lines' },
					{ component: ListSlidingPage, name: 'ListSlidingPage', segment: 'list-sliding' },
					{ component: ListThumbnailPage, name: 'ListThumbnailPage', segment: 'list-thumbnail' },

					{ component: LoadingBasicPage, name: 'LoadingBasicPage', segment: 'loading-basic' },

					{ component: MenuBasicPage, name: 'MenuBasicPage', segment: 'menu-basic' },
					{ component: MenuPageOne, name: 'MenuPageOne', segment: 'menu-one' },
					{ component: MenuPageTwo, name: 'MenuPageTwo', segment: 'menu-two' },
					{ component: MenuPageThree, name: 'MenuPageThree', segment: 'menu-three' },

					{ component: ModalBasicPage, name: 'ModalBasicPage', segment: 'modal-basic' },
					{ component: ModalContentPage, name: 'ModalContentPage', segment: 'modal-content' },

					{ component: NavigationBasicPage, name: 'NavigationBasicPage', segment: 'navigation-basic' },
					{ component: NavigationDetailsPage, name: 'NavigationDetailsPage', segment: 'navigation-details' },

					{ component: PopoverBasicPage, name: 'PopoverBasicPage', segment: 'popover-basic' },
					{ component: PopoverContentPage, name: 'PopoverContentPage', segment: 'popover-content' },

					{ component: RadioBasicPage, name: 'RadioBasicPage', segment: 'radio-basic' },

					{ component: RangeBasicPage, name: 'RangeBasicPage', segment: 'range-basic' },

					{ component: SearchbarBasicPage, name: 'SearchbarBasicPage', segment: 'searchbar-basic' },

					{ component: SegmentBasicPage, name: 'SegmentBasicPage', segment: 'segment-basic' },

					{ component: SelectBasicPage, name: 'SelectBasicPage', segment: 'select-basic' },

					{ component: SlideBasicPage, name: 'SlideBasicPage', segment: 'slide-basic' },

					{ component: TabBadgesPage, name: 'TabBadgesPage', segment: 'tab-badges' },
					{ component: TabBasicPage, name: 'TabBasicPage', segment: 'tab-basic' },
					{ component: TabIconPage, name: 'TabIconPage', segment: 'tab-icon' },
					{ component: TabIconTextPage, name: 'TabIconTextPage', segment: 'tab-icon-text' },

					{ component: ToastBasicPage, name: 'ToastBasicPage', segment: 'toast-basic' },

					{ component: ToggleBasicPage, name: 'ToggleBasicPage', segment: 'toggle-basic' },

					{ component: ToolbarBasicPage, name: 'ToolbarBasicPage', segment: 'toolbar-basic' },
					{ component: ToolbarButtonsPage, name: 'ToolbarButtonsPage', segment: 'toolbar-buttons' },
					{ component: ToolbarColorsPage, name: 'ToolbarColorsPage', segment: 'toolbar-colors' },
					{ component: ToolbarColorsPage2, name: 'ToolbarColorsPage2', segment: 'toolbar-colors2' },
					{ component: ToolbarColorsPage3, name: 'ToolbarColorsPage3', segment: 'toolbar-colors3' },
					{ component: ToolbarColorsPage4, name: 'ToolbarColorsPage4', segment: 'toolbar-colors4' },
					{ component: ToolbarSearchbarPage, name: 'ToolbarSearchbarPage', segment: 'toolbar-searchbar' },
					{ component: ToolbarSegmentPage, name: 'ToolbarSegmentPage', segment: 'toolbar-segment' }
				]
			})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MainApp,
		HomePage, ListPage,
		SmartImagePage,
		AccordionPage,
		IonicComponentsPage,
		HideBottomBarOnScrollPage, LayoutsPage,
		LazyimgPage,
		PickerPage,
		TopiconBtnPage,
		TabsPage,
		SelectFabPage,
		RatingPage,

		ActionSheetsPage,
		AlertsPage,
		BadgesPage,
		ButtonsPage,

		FabBasicPage,

		CardAdvancedMapPage,
		CardAdvancedSocialPage,
		CardAdvancedWeatherPage,
		CardBackgroundPage,
		CardBasicPage,
		CardHeaderPage,
		CardImagePage,
		CardListPage,

		CheckboxBasicPage,

		DatetimeBasicPage,

		GestureBasicPage,

		GridBasicPage,

		IconBasicPage,

		InputBasicPage,
		InputFloatingPage,
		InputFixedInlinePage,
		InputInlinePage,
		InputInsetPage,
		InputPlaceholderPage,
		InputStackedPage,

		ListAvatarPage,
		ListBasicPage,
		ListDividersPage,
		ListHeadersPage,
		ListIconPage,
		ListInsetPage,
		ListMultilinePage,
		ListNoLinesPage,
		ListSlidingPage,
		ListThumbnailPage,

		LoadingBasicPage,

		MenuBasicPage,
		MenuPageOne,
		MenuPageTwo,
		MenuPageThree,

		ModalBasicPage,
		ModalContentPage,

		NavigationBasicPage,
		NavigationDetailsPage,

		PopoverBasicPage,
		PopoverContentPage,

		RadioBasicPage,

		RangeBasicPage,

		SearchbarBasicPage,

		SegmentBasicPage,

		SelectBasicPage,

		SlideBasicPage,

		TabBadgesPage,
		TabBadgesContent,

		TabBasicPage,
		TabBasicContentPage,

		TabIconPage,
		TabIconContentPage,

		TabIconTextPage,
		TabIconTextContentPage,

		ToastBasicPage,

		ToggleBasicPage,

		ToolbarBasicPage,
		ToolbarButtonsPage,
		ToolbarColorsPage,
		ToolbarColorsPage2,
		ToolbarColorsPage3,
		ToolbarColorsPage4,
		ToolbarSearchbarPage,
		ToolbarSegmentPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		SampleProvider
	]
})
export class AppModule { }
