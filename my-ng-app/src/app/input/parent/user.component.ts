import { Component, OnInit } from "@angular/core";
import data from "./user.json";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit{
  addresses: any;
  userLoggedIn: boolean = true;
  users: any[] = data;
  ngOnInit(): void {
    this.addresses = data.map(user => user.address);
    console.log(this.addresses)
  }
}