import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighLightDirective } from './directives/basic-directive/basic-attribute-directive';
import { GreetComponent } from './components/greet/greet.component';
import { DirectiveWithRenderer } from './directives/use-renderer/directive-with-renderer';
import { HostListenerDirective } from './directives/using-host-listner/host-listener.directive';
import { HostBindingDirective } from './directives/use-host-binding/host-binding.directive';
import { CustomStructuralDirective } from './directives/custom-structural-directive/custom-structural-directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    GreetComponent,
    DirectiveWithRenderer,
    HostListenerDirective,
    HostBindingDirective,
    CustomStructuralDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
