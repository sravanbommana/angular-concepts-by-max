import { Directive, HostBinding, HostListener } from "@angular/core";
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Directive({
  selector: '[appHostListenerDirective]'
})

export class HostBindingDirective {
  @HostBinding('style') style: SafeStyle;
  constructor(private sanitizer: DomSanitizer) {}

  @HostListener('mouseenter') mouseover(event: Event) {
    this.style = this.sanitizer.bypassSecurityTrustStyle('backgroundColor: green; color: white; display: block;');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.style = this.sanitizer.bypassSecurityTrustStyle('background: transparent; color: white; display: block;');
  }
}