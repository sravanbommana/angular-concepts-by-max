import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector:'app-view-child-two',
  templateUrl:"./view-child-two.component.html"
})

export class ViewChildTwoComponent implements AfterViewInit{
  constructor() {}
  @ViewChild('name') elementRef: ElementRef;

  ngAfterViewInit(): void {
      this.elementRef.nativeElement.focus();
  }
}