import { Component, OnInit } from "@angular/core";
import { InteractionService } from "../service/interaction.service";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html'
})

export class TeacherComponent implements OnInit{
  constructor(private interactiveService: InteractionService) {}
  
  ngOnInit(): void {
    this.interactiveService.set("age", 33);
  }
}