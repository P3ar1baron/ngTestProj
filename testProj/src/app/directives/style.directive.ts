import {Directive, ElementRef, HostBinding, HostListener, Inject, Input, Renderer2} from '@angular/core'

@Directive({
  selector: '[appStyle]',

})
export class StyleDirective {
  @Input('appStyle') color = 'blue'
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string}

  @HostBinding('style.color') elColor = null

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
    // this.renderer.setStyle(this.elRef.nativeElement, 'color',  this.color)
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight',  this.dStyles.fontWeight)
    // this.renderer.setStyle(this.elRef.nativeElement, 'border',  this.dStyles.border)
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius',  this.dStyles.borderRadius)
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', null)
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null)
    // this.renderer.setStyle(this.elRef.nativeElement, 'border',  null)
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius',  null)
  }
}
