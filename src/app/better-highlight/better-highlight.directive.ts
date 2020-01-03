import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //renderer is better to used for DOM manipulation because the element not exist. Thus if you used grab
  // the element directly, it might throw an null pointer error
  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

}
