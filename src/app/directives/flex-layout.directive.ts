import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fxLayout], [fxLayoutAlign], [fxFlex], [fxFlexOffset], [fxFlexOrder], [fxFlexFill], [fxLayoutGap]',
  standalone: false
})
export class FlexLayoutDirective implements OnInit {
  @Input() fxLayout: string = '';
  @Input() fxLayoutAlign: string = '';
  @Input() fxFlex: string | number = '';
  @Input() fxFlexOffset: string | number = 0;
  @Input() fxFlexOrder: number = 0;
  @Input() fxFlexFill: boolean = false;
  @Input() fxLayoutGap: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.setLayout();
    this.setLayoutAlign();
    this.setFlex();
    this.setFlexOffset();
    this.setFlexOrder();
    this.setFlexFill();
    this.setLayoutGap();
  }

  private setLayout() {
    if (this.fxLayout) {
      const [direction] = this.fxLayout.split(' ');
      this.renderer.addClass(this.el.nativeElement, `fx-${direction}`);
    }
  }

  private setLayoutAlign() {
    if (this.fxLayoutAlign) {
      const [main, cross] = this.fxLayoutAlign.split(' ');
      if (main) {
        this.renderer.addClass(this.el.nativeElement, `fx-justify-${main}`);
      }
      if (cross) {
        this.renderer.addClass(this.el.nativeElement, `fx-align-${cross}`);
      }
    }
  }

  private setFlex() {
    if (this.fxFlex !== undefined) {
      if (this.fxFlex === '') {
        this.renderer.addClass(this.el.nativeElement, 'fx-flex');
      } else if (typeof this.fxFlex === 'number' || !isNaN(Number(this.fxFlex))) {
        this.renderer.addClass(this.el.nativeElement, `fx-flex-${this.fxFlex}`);
      } else {
        switch (this.fxFlex) {
          case 'grow':
            this.renderer.addClass(this.el.nativeElement, 'fx-flex-grow');
            break;
          case 'initial':
            this.renderer.addClass(this.el.nativeElement, 'fx-flex-initial');
            break;
          case 'auto':
            this.renderer.addClass(this.el.nativeElement, 'fx-flex-auto');
            break;
          case 'none':
            this.renderer.addClass(this.el.nativeElement, 'fx-flex-none');
            break;
          default:
            this.renderer.addClass(this.el.nativeElement, `fx-flex-${this.fxFlex}`);
        }
      }
    }
  }

  private setFlexOffset() {
    if (this.fxFlexOffset) {
      const offset = typeof this.fxFlexOffset === 'number' ?
        this.fxFlexOffset : parseInt(this.fxFlexOffset, 10);
      this.renderer.setStyle(this.el.nativeElement, 'margin-left', `${offset}%`);
    }
  }

  private setFlexOrder() {
    if (this.fxFlexOrder !== undefined) {
      this.renderer.addClass(this.el.nativeElement, `fx-order-${this.fxFlexOrder}`);
    }
  }

  private setFlexFill() {
    if (this.fxFlexFill) {
      this.renderer.addClass(this.el.nativeElement, 'fx-fill');
    }
  }

  private setLayoutGap() {
    if (this.fxLayoutGap) {
      const gap = this.fxLayoutGap.replace('px', '');
      this.renderer.addClass(this.el.nativeElement, `fx-gap-${gap}`);
    }
  }
}
