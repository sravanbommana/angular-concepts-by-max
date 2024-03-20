import { Directive, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
  selector: '[directiveWithRenderer]'
})

export class DirectiveWithRenderer implements OnInit{
  constructor(private elementref: ElementRef, private renderer: Renderer2){}

  ngOnInit() : void{
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'red');
    this.renderer.setStyle(this.elementref.nativeElement, 'color', 'white');
  }
}