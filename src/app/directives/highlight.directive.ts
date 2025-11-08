import { Directive, ElementRef } from "@angular/core";
import { default as hljs } from 'highlight.js';

@Directive({
  selector: 'code[highlight]',
  standalone: false
})
export class HighlightCodeDirective {
  constructor(private eltRef:ElementRef) {
  }

  ngAfterViewInit() {
    console.log('DIRECTIVE CALLEd');
    hljs.highlightBlock(this.eltRef.nativeElement);
  }
}
