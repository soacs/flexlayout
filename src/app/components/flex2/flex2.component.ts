import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

@Component({
  selector: 'app-flex2',
  templateUrl: './flex2.component.html',
  styleUrls: ['./flex2.component.css']
})
export class Flex2Component implements OnInit, OnDestroy {
  content: string;
  watcher: Subscription;
  activeMediaQuery = '';

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else if ( change.mqAlias === 'lg') {
        this.loadDesktopContent();
      } else if ( change.mqAlias === 'sm') {
        this.loadSmallContent();
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
    return false;
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  loadMobileContent() {
    console.log('loading mobile content');
    this.content = 'MOBILE CONTENT';
  }

  loadDesktopContent() {
    console.log('loading desktop content');
    this.content = 'DESKTOP CONTENT';
  }

  loadMediumContent() {
    console.log('loading medium content');
    this.content = 'MEDIUM CONTENT';
  }

  loadSmallContent() {
    console.log('loading small content');
    this.content = 'SMALL CONTENT';
  }


}

