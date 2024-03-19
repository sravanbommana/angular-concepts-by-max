import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ChildComponent2 } from "./child.component";

@Component({
  selector:'app-view-child-one',
  templateUrl:"./view-child-one.component.html"
})

export class ViewChildOneComponent implements AfterViewInit{
  @ViewChild(ChildComponent2) childComponentRef: ChildComponent2
  constructor() {}

  ngAfterViewInit(): void {
      this.childComponentRef.message = "This message is from Parent"
  }
}