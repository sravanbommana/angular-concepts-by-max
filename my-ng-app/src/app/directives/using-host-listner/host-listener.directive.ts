import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHostListenerDirective]'
})

export class HostListenerDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'violet');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }
}