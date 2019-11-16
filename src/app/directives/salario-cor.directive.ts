import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salarioCor]'
})
export class SalarioCorDirective {

  constructor(private element: ElementRef) {
  }

  @Input()
  set salarioCor(value) {
    const elemento: HTMLElement = this.element.nativeElement;
    const salario = parseFloat(value);
    elemento.style.color = salario > 20000 ? 'green' : 'red';
  }
}
