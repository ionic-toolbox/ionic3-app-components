import { ActionSheetsPage }				from '../pages-ionic-components/action-sheets/page';
import { AlertsPage }					from './../pages-ionic-components/alerts/page';
import { BadgesPage }					from '../pages-ionic-components/badges/page';
import { ButtonsPage }					from '../pages-ionic-components/buttons/page';
import { GridsPage }					from '../pages-ionic-components/grids/page';

// fabs
import { BasicPage as FabBasicPage } from '../pages-ionic-components/fabs/basic/pages';

// cards
import { AdvancedMapPage as CardAdvancedMapPage } from '../pages-ionic-components/cards/advanced-map/pages';
import { AdvancedSocialPage as CardAdvancedSocialPage } from '../pages-ionic-components/cards/advanced-social/pages';
// import { AdvancedWeatherPage as CardAdvancedWeatherPage } from '../pages-ionic-components/cards/advanced-weather/pages';
import { BackgroundPage as CardBackgroundPage } from '../pages-ionic-components/cards/background/pages';
import { BasicPage as CardBasicPage } from '../pages-ionic-components/cards/basic/pages';
import { HeaderPage as CardHeaderPage } from '../pages-ionic-components/cards/header/pages';
import { ImagePage as CardImagePage } from '../pages-ionic-components/cards/image/pages';
import { ListPage as CardListPage } from '../pages-ionic-components/cards/list/pages';

// checkboxes
import { BasicPage as CheckboxBasicPage } from '../pages-ionic-components/checkboxes/basic/pages';

// datetime
import { BasicPage as DatetimeBasicPage } from '../pages-ionic-components/datetime/basic/pages';

// gestures
import { BasicPage as GestureBasicPage } from '../pages-ionic-components/gestures/basic/pages';


// icons
import { BasicPage as IconBasicPage } from '../pages-ionic-components/icons/basic/pages';

// inputs
import { BasicPage as InputBasicPage } from '../pages-ionic-components/inputs/basic/pages';
import { FloatingPage as InputFloatingPage } from '../pages-ionic-components/inputs/floating/pages';
import { FixedInlinePage as InputFixedInlinePage } from '../pages-ionic-components/inputs/fixed-inline/pages';
import { InlinePage as InputInlinePage } from '../pages-ionic-components/inputs/inline/pages';
import { InsetPage as InputInsetPage } from '../pages-ionic-components/inputs/inset/pages';
import { PlaceholderPage as InputPlaceholderPage } from '../pages-ionic-components/inputs/placeholder/pages';
import { StackedPage as InputStackedPage } from '../pages-ionic-components/inputs/stacked/pages';

// lists
import { AvatarPage as ListAvatarPage } from '../pages-ionic-components/lists/avatar/pages';
import { BasicPage as ListBasicPage } from '../pages-ionic-components/lists/basic/pages';
import { DividersPage as ListDividersPage } from '../pages-ionic-components/lists/dividers/pages';
import { HeadersPage as ListHeadersPage } from '../pages-ionic-components/lists/headers/pages';
import { IconPage as ListIconPage } from '../pages-ionic-components/lists/icon/pages';
import { InsetPage as ListInsetPage } from '../pages-ionic-components/lists/inset/pages';
import { MultilinePage as ListMultilinePage } from '../pages-ionic-components/lists/multiline/pages';
import { NoLinesPage as ListNoLinesPage } from '../pages-ionic-components/lists/no-lines/pages';
import { SlidingPage as ListSlidingPage } from '../pages-ionic-components/lists/sliding/pages';
import { ThumbnailPage as ListThumbnailPage } from '../pages-ionic-components/lists/thumbnail/pages';

// loading
import { BasicPage as LoadingBasicPage } from '../pages-ionic-components/loading/basic/pages';

// menu
import { BasicPage as MenuBasicPage } from '../pages-ionic-components/menus/basic/pages';

// modals
import { BasicPage as ModalBasicPage } from '../pages-ionic-components/modals/basic/pages';

// navigation
import { BasicPage as NavigationBasicPage } from '../pages-ionic-components/navigation/basic/pages';

// popover
import { BasicPage as PopoverBasicPage } from '../pages-ionic-components/popovers/basic/pages';

// radios
import { BasicPage as RadioBasicPage } from '../pages-ionic-components/radios/basic/pages';

// ranges
import { BasicPage as RangeBasicPage } from '../pages-ionic-components/ranges/basic/pages';

// searchbar
import { BasicPage as SearchbarBasicPage } from '../pages-ionic-components/searchbars/basic/pages';

// segments
import { BasicPage as SegmentBasicPage } from '../pages-ionic-components/segments/basic/pages';

// selects
import { BasicPage as SelectBasicPage } from '../pages-ionic-components/selects/basic/pages';

// slides
import { BasicPage as SlideBasicPage } from '../pages-ionic-components/slides/basic/pages';

// tabs
import { BadgesPage as TabBadgesPage } from '../pages-ionic-components/tabs/badges/pages';
import { BasicPage as TabBasicPage } from '../pages-ionic-components/tabs/basic/pages';
import { IconPage as TabIconPage } from '../pages-ionic-components/tabs/icon/pages';
import { IconTextPage as TabIconTextPage } from '../pages-ionic-components/tabs/icon-text/pages';

// toast
import { BasicPage as ToastBasicPage } from '../pages-ionic-components/toast/basic/pages';

// toggles
import { BasicPage as ToggleBasicPage } from '../pages-ionic-components/toggles/basic/pages';

// toolbars
import { BasicPage as ToolbarBasicPage } from '../pages-ionic-components/toolbar/basic/pages';
import { ButtonsPage as ToolbarButtonsPage } from '../pages-ionic-components/toolbar/buttons/pages';
import { ColorsPage as ToolbarColorsPage } from '../pages-ionic-components/toolbar/colors/pages';
import { SearchbarPage as ToolbarSearchbarPage } from '../pages-ionic-components/toolbar/searchbar/pages';
import { SegmentPage as ToolbarSegmentPage } from '../pages-ionic-components/toolbar/segment/pages';


export function hasScrollbar() {

	if (typeof window.top.innerWidth === 'number') {
		return window.top.innerWidth > window.top.document.documentElement.clientWidth;
	}

	// rootElem for quirksmode
	var rootElem = window.top.document.documentElement || window.top.document.body;

	// Check overflow style property on body for fauxscrollbars
	var overflowStyle;

	if (typeof rootElem.style !== 'undefined') {
		overflowStyle = rootElem.style.overflow;
	}

	overflowStyle = overflowStyle || window.top.getComputedStyle(rootElem, '').overflow;

	// Also need to check the Y axis overflow
	var overflowYStyle;

	if (typeof rootElem.style !== 'undefined') {
		overflowYStyle = rootElem.style.overflowY;
	}

	overflowYStyle = overflowYStyle || window.top.getComputedStyle(rootElem, '').overflowY;

	var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
	var overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
	var alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

	return (contentOverflows && overflowShown) || (alwaysShowScroll);
}

export function getPages() {
	return {
		'overview': ActionSheetsPage,
		'action-sheets': ActionSheetsPage,
		'alerts': AlertsPage,
		'badges': BadgesPage,
		'buttons': ButtonsPage,
		'fabs': FabBasicPage,
		'cards': CardBasicPage,
		'card-header': CardHeaderPage,
		'card-list': CardListPage,
		'card-image': CardImagePage,
		'card-background': CardBackgroundPage,
		'advanced-cards': CardAdvancedSocialPage,
		'card-advanced-map': CardAdvancedMapPage,
		'card-advanced-social': CardAdvancedSocialPage,
		// 'card-advanced-weather': CardAdvancedWeatherPage,
		'checkbox': CheckboxBasicPage,
		'datetime': DatetimeBasicPage,
		'gestures': GestureBasicPage,
		'inputs': InputBasicPage,
		'fixed-inline-labels': InputFixedInlinePage,
		'floating-labels': InputFloatingPage,
		'inline-labels': InputInlinePage,
		'inset-labels': InputInsetPage,
		'placeholder-labels': InputPlaceholderPage,
		'stacked-labels': InputStackedPage,
		'icons': IconBasicPage,
		'grid': GridsPage,
		'lists': ListBasicPage,
		'list-lines': ListBasicPage,
		'list-no-lines': ListNoLinesPage,
		'avatar-list': ListAvatarPage,
		'icon-list': ListIconPage,
		'inset-list': ListInsetPage,
		'list-dividers': ListDividersPage,
		'list-headers': ListHeadersPage,
		'multiline-list': ListMultilinePage,
		'sliding-list': ListSlidingPage,
		'thumbnail-list': ListThumbnailPage,
		'loading': LoadingBasicPage,
		'menus': MenuBasicPage,
		'modals': ModalBasicPage,
		'navigation': NavigationBasicPage,
		'popovers': PopoverBasicPage,
		'radio': RadioBasicPage,
		'range': RangeBasicPage,
		'segment': SegmentBasicPage,
		'select': SelectBasicPage,
		'searchbar': SearchbarBasicPage,
		'toggle': ToggleBasicPage,
		'slides': SlideBasicPage,
		'tabs': TabBasicPage,
		'tabs-icon': TabIconPage,
		'tabs-icon-text': TabIconTextPage,
		'tabs-badges': TabBadgesPage,
		'toast': ToastBasicPage,
		'toolbar': ToolbarBasicPage,
		'toolbar-buttons': ToolbarButtonsPage,
		'toolbar-segment': ToolbarSegmentPage,
		'toolbar-searchbar': ToolbarSearchbarPage,
		'toolbar-colors': ToolbarColorsPage
	};
}

export function getPageFor(hash) {
	return getPages()[hash];
}

export function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
