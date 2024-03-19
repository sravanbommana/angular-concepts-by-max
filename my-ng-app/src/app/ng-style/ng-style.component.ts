import { Component } from "@angular/core";

@Component({
  selector: 'app-ng-style',
  templateUrl:'./ng-style.component.html',
  styleUrl: './ng-style.component.css'
})

export class NgStyleComponent {
  backgroundColor: string = 'red';

  handleColorChange(event, color){
    this.backgroundColor = color;
  }
}