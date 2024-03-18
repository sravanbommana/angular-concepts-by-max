import { Component, Input } from "@angular/core";

@Component({
  selector:'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  @Input()
  count: number;
  constructor() {
    this.count = 0;
  }

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    this.count--;
  }
}