import { Component } from "@angular/core";

@Component({
  selector:'app-data-binding',
  templateUrl: './data-binding.component.html',
})

export class DataBindingComponent {
  name: string
  disable: boolean = false
  constructor() {
    this.name = ""
  }

  handleClick = () => {
    this.disable = !this.disable
  }
}