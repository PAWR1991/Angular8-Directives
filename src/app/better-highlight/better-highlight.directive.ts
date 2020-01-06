import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
   //tell the DOM's element that has been binded to appBetterHighlight , to access the the Style - backgroundColor property
   @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  //renderer is better to used for DOM manipulation because the element not exist. Thus if you used grab
  // the element directly, it might throw an null pointer error
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }


  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}
