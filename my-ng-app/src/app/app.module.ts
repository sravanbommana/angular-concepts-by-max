import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
