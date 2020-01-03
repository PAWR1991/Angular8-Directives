import { Directive, ElementRef, OnInit} from '@angular/core'
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){}
    ngOnInit(){
        //This is not the best way to access an html elements
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}