import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[phoneMask]'
})
export class PhoneMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any): void {
    const initialValue = event.target.value;
    this.el.nativeElement.value = this.formatNumber(initialValue);
  }

  formatNumber(value: string): string {
    let cleanedValue = value.replace(/\D/g, '');
    if (cleanedValue.length > 9) {
      cleanedValue = cleanedValue.substring(0, 9);
    }
    const parts = [
      cleanedValue.substring(0, 3),
      cleanedValue.substring(3, 5),
      cleanedValue.substring(5, 7),
      cleanedValue.substring(7, 9)
    ];
    return parts.join(' ').trim();
  }

}
