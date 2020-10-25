import {Directive, ElementRef, HostListener, Inject, Renderer2} from '@angular/core'

@Directive({
  selector: '[appStyle]',

})
export class StyleDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', null)
  }
}
