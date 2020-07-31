import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ){
    gtag('event', eventName, {
      eventCategory: eventCategory,
      'event_label': eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    })
  }

  public pageViewEmitter(
    pagePath: string,
    pageTitle: string,
  ){
    gtag('config', environment.anaylitcsKey, {
      'page_path': pagePath,
      'page_title': pageTitle
    });
  }
}
