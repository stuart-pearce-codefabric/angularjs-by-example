import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ngEnter]'
})
export class NgEnterDirective {
  @Input() ngEnter: () => void;

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.ngEnter();
      event.preventDefault();
    }
  }
}
