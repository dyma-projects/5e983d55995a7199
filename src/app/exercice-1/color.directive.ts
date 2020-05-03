import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
  ) { }

  @HostListener('window:keyup', ['$event']) windowClick($event) {
    const key: string = $event.key;
    switch(key.toLowerCase()) {
      case ('arrowup') :
        this._el.nativeElement.style.color = 'pink';
      break;
      case ('arrowdown') :
        this._el.nativeElement.style.color = 'blue';
      break;
      case ('arrowleft') :
        this._el.nativeElement.style.color = 'yellow';
      break;
      case ('arrowright') :
        this._el.nativeElement.style.color = 'green';
      break;
    }
  }

}
