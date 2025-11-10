import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl]',
  standalone: false
})
export class ResponsiveStyleDirective implements OnInit, OnDestroy {
  @Input('ngStyle.xs') ngStyleXs: { [key: string]: any } | string = {};
  @Input('ngStyle.sm') ngStyleSm: { [key: string]: any } | string = {};
  @Input('ngStyle.md') ngStyleMd: { [key: string]: any } | string = {};
  @Input('ngStyle.lg') ngStyleLg: { [key: string]: any } | string = {};
  @Input('ngStyle.xl') ngStyleXl: { [key: string]: any } | string = {};

  private mediaQueryListeners: Array<{ query: MediaQueryList; handler: () => void }> = [];
  private appliedStyles: Set<string> = new Set();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.setupResponsiveStyles();
  }

  ngOnDestroy() {
    // Limpiar los listeners
    this.mediaQueryListeners.forEach(({ query, handler }) => {
      query.removeEventListener('change', handler);
    });
  }

  private setupResponsiveStyles() {
    const breakpoints = [
      { name: 'xs', query: '(max-width: 599px)', styles: this.ngStyleXs },
      { name: 'sm', query: '(min-width: 600px) and (max-width: 959px)', styles: this.ngStyleSm },
      { name: 'md', query: '(min-width: 960px) and (max-width: 1279px)', styles: this.ngStyleMd },
      { name: 'lg', query: '(min-width: 1280px) and (max-width: 1919px)', styles: this.ngStyleLg },
      { name: 'xl', query: '(min-width: 1920px)', styles: this.ngStyleXl }
    ];

    breakpoints.forEach(breakpoint => {
      if (breakpoint.styles && Object.keys(breakpoint.styles).length > 0) {
        const mediaQuery = window.matchMedia(breakpoint.query);

        const handler = () => {
          this.applyStyles(breakpoint.styles, mediaQuery.matches);
        };

        // Aplicar inmediatamente
        handler();

        // Escuchar cambios
        mediaQuery.addEventListener('change', handler);

        this.mediaQueryListeners.push({ query: mediaQuery, handler });
      }
    });
  }

  private applyStyles(styles: { [key: string]: any } | string, shouldApply: boolean) {
    if (!styles) return;

    let styleObj: { [key: string]: any } = {};

    // Si es un string, intentar parsearlo como objeto
    if (typeof styles === 'string') {
      try {
        // Si viene como string con formato "'property': 'value'"
        const cleaned = styles.replace(/'/g, '"');
        styleObj = JSON.parse(`{${cleaned}}`);
      } catch {
        // Si falla el parse, ignorar
        return;
      }
    } else {
      styleObj = styles;
    }

    Object.keys(styleObj).forEach(property => {
      if (shouldApply) {
        this.renderer.setStyle(this.el.nativeElement, property, styleObj[property]);
        this.appliedStyles.add(property);
      } else {
        // Solo remover si fue aplicado previamente
        if (this.appliedStyles.has(property)) {
          this.renderer.removeStyle(this.el.nativeElement, property);
          this.appliedStyles.delete(property);
        }
      }
    });
  }
}
