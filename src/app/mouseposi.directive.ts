import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseposi]'
})
export class MouseposiDirective {

  constructor() { }

  @HostListener('mousemove', ['$event']) onMouseMove(event: { clientX: any; clientY: any; }) {
    console.log(event.clientX, event.clientY);
  }
}



