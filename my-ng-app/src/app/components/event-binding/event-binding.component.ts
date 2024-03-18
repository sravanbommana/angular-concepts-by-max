import { Component } from "@angular/core";

@Component({
  selector: 'app-event-binding',
  templateUrl:'./event-binding.component.html'
})

export class EventBindingComponent {
  age: number;
  constructor() {
    this.age = 0
  }

  handleAgeChange(event) {
    this.age = event.target.value
  }

  handleSubmit() {
    console.log("Printing Info", this.age)
  }
}