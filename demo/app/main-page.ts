import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';
import { topmost } from 'tns-core-modules/ui/frame/frame';

declare const CDVViewController : any;

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onButtonTapped() {
    const viewController = CDVViewController.alloc().init();
    topmost().currentPage.ios.presentViewControllerAnimatedCompletion(viewController, false, null);
}