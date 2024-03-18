import { Component } from "@angular/core";

@Component({
  selector:'app-string-interpolation',
  templateUrl:'./string-interpolation.component.html'
})

export class StringInterpolationComponent {
  title: string;
  constructor() {
    this.title = "Welcome to String Interpolation"
  }

  // we can call methods also using string interpolation
  showDisplayText() {
    return 'This is text from Method'
  }
}