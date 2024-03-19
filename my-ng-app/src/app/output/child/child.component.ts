import { Component, EventEmitter, Output } from "@angular/core";
@Component({
  selector: 'app-output-child',
  templateUrl: "./child.component.html"
})

export class ChildComponent {
  name: string = '';
  constructor() {}
  @Output() greetEvent = new EventEmitter();

  greetHandler() {
    this.greetEvent.emit("Pavan");
  }
}