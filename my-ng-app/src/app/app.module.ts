import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgContentChildComponent } from './components/content-child/content-child.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { CustomAccordionComponent } from './components/custom-accordion/custom-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentChildComponent,
    NgContentComponent,
    CustomAccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
