import { Component } from "@angular/core";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})

export class WelcomeComponent {
  title: string;
  constructor() {
    this.title = "Welcome There"
  }
}