import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './components/app/app.component';
import {Flex1Component} from './components/flex1/flex1.component';
import {Flex2Component} from './components/flex2/flex2.component';
import {Flex3Component} from './components/flex3/flex3.component';
import {DEFAULT_BREAKPOINTS, BreakPoint} from '@angular/flex-layout';
import {InjectionToken} from '@angular/core';
import { PlainflexComponent } from './components/plainflex/plainflex.component';

export const BREAKPOINTS = new InjectionToken<BreakPoint[]>('Token (@angular/flex-layout) Breakpoints');


export const PRINT_BREAKPOINTS = [{
  alias: 'xs.print',
  suffix: 'XsPrint',
  mediaQuery: 'print and (max-width: 297px)',
  overlapping: false
}];

export const CustomBreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: [...DEFAULT_BREAKPOINTS, ...PRINT_BREAKPOINTS],
};

@NgModule({
  declarations: [
    AppComponent,
    Flex1Component,
    Flex2Component,
    Flex3Component,
    PlainflexComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
