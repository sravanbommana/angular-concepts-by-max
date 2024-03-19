import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})

export class UserListComponent {
  @Input() addresses;
  message: string;
  private isLoggedIn:boolean = false;
  
  // Getter and Setters
  get loggedIn(): boolean {
    return this.isLoggedIn;
  }

  // Here you can do any operations depend upon this value
  @Input()
  set loggedIn(value: boolean) {
    this.isLoggedIn = value;
    if(this.isLoggedIn) {
      this.message = "Welcome User"
    } else {
      this.message = "Please login"
    }
  }
}