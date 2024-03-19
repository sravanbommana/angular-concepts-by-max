import { Component } from "@angular/core";

@Component({
  selector: 'app-child-template-reference',
  templateUrl: './child-template-refrence.component.html'
})

export class ChildTemplateReference {
  name:string = "Reference Test"

  greet() {
    alert('Welcome to Reference Test')
  }
}