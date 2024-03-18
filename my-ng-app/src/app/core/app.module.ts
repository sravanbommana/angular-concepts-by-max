import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeModule } from '../features/welcome-feature/welcome.module';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
