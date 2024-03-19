import { Component, OnInit } from "@angular/core";
import { InteractionService } from "../service/interaction.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})

export class StudentComponent implements OnInit{
  data:any;
  constructor(private interactiveService: InteractionService) {
  }

  ngOnInit(): void {
      console.log("**************************************");
      this.interactiveService.getValueFromStore().subscribe(data => this.data = data)
  }
}