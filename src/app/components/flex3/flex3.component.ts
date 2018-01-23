import { Component, OnInit, OnDestroy, Input, ElementRef, Directive, Renderer } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia, MediaMonitor} from '@angular/flex-layout';
import { ShowHideDirective, negativeOf } from '@angular/flex-layout';
/*
@Directive({selector: `
  [fxHide.xs.print]
`})
export class CustomShowHideDirective extends ShowHideDirective {
  constructor(monitor: MediaMonitor, elRef: ElementRef, renderer: Renderer) {
    super(monitor, elRef, renderer);
  }

  @Input('fxHide.xs.print')
   set hideXs(val) {
    this._cacheInput("showXsPrint", negativeOf(val));
  }
}
*/
@Component({
  selector: 'app-flex3',
  templateUrl: './flex3.component.html',
  styleUrls: ['./flex3.component.css']
})
export class Flex3Component implements OnInit, OnDestroy {

  watcher: Subscription;
  activeMediaQuery = '';

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else if ( change.mqAlias === 'lg') {
        this.loadDesktopContent();
      } else if ( change.mqAlias === 'md') {
        this.loadMediumContent();
      }
    });
  }

  ngOnInit() {
  }

  isMobile() {
    return false;
  }

  invisibleOnDesktop() {
    return true;
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  loadMobileContent() {
    console.log('loading mobile content');
  }

  loadDesktopContent() {
    console.log('loading desktop content');
  }

  loadMediumContent() {
    console.log('loading medium content');
  }


}






