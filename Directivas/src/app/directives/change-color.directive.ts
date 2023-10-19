import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective {

  elem = inject(ElementRef);

  @Input('changeColor') color: string = 'red';

  constructor(/**private elem: ElementRef*/) {
    console.log('Constructor');
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elem.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elem.nativeElement.style.color = 'black';
  }

}
