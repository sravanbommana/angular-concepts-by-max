import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WelcomeComponent } from "./components/welcome/welcome.component";

@NgModule({
  declarations:[WelcomeComponent],
  imports:[CommonModule, BrowserModule],
  exports:[WelcomeComponent]
})

export class WelcomeModule {

}