import { Directive, HostBinding, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngIfForm]'
})
export class NgIfFormDirective {
  @HostBinding('class.hidden')
  hidden: boolean = false;
  @Input('ngIfForm')
  public set isHidden(val: boolean) {
    this.hidden = !val;
  }

  constructor(private el: ElementRef) {
    var nativeEl: HTMLElement = el.nativeElement;
    nativeEl.classList.add('ngIfForm');
  }
}
