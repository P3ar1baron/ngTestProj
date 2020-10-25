import {Input, TemplateRef} from '@angular/core';
import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set ifNot(condition: boolean) {
    if (!condition) {
      // show
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
