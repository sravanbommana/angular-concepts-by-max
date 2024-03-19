import { Component } from "@angular/core";
@Component({
  selector: 'app-output-parent',
  templateUrl: "./parent.component.html"
})

export class ParentComponent {
  constructor() {}

  greet(name:any) {
    alert(`Welcome ${name}`);
  }
}