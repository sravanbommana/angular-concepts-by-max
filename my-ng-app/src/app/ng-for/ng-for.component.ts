import { Component } from "@angular/core";

@Component({
  selector:'app-ng-for',
  templateUrl: './ng-for.component.html'
})

export class NgForComponent {
  users: String[] = ["Aplha", "Beta", "Gama", "Delta"];
}