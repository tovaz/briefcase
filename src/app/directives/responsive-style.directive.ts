import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl], [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl], [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]',
  standalone: false
})
export class ResponsiveStyleDirective implements OnInit, OnDestroy {
  // Breakpoints exactos
  @Input('ngStyle.xs') ngStyleXs: { [key: string]: any } | string = {};
  @Input('ngStyle.sm') ngStyleSm: { [key: string]: any } | string = {};
  @Input('ngStyle.md') ngStyleMd: { [key: string]: any } | string = {};
  @Input('ngStyle.lg') ngStyleLg: { [key: string]: any } | string = {};
  @Input('ngStyle.xl') ngStyleXl: { [key: string]: any } | string = {};

  // Less than (menor que)
  @Input('ngStyle.lt-sm') ngStyleLtSm: { [key: string]: any } | string = {};
  @Input('ngStyle.lt-md') ngStyleLtMd: { [key: string]: any } | string = {};
  @Input('ngStyle.lt-lg') ngStyleLtLg: { [key: string]: any } | string = {};
  @Input('ngStyle.lt-xl') ngStyleLtXl: { [key: string]: any } | string = {};

  // Greater than (mayor que)
  @Input('ngStyle.gt-xs') ngStyleGtXs: { [key: string]: any } | string = {};
  @Input('ngStyle.gt-sm') ngStyleGtSm: { [key: string]: any } | string = {};
  @Input('ngStyle.gt-md') ngStyleGtMd: { [key: string]: any } | string = {};
  @Input('ngStyle.gt-lg') ngStyleGtLg: { [key: string]: any } | string = {};

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
      // Breakpoints exactos
      { name: 'xs', query: '(max-width: 599px)', styles: this.ngStyleXs },
      { name: 'sm', query: '(min-width: 600px) and (max-width: 959px)', styles: this.ngStyleSm },
      { name: 'md', query: '(min-width: 960px) and (max-width: 1279px)', styles: this.ngStyleMd },
      { name: 'lg', query: '(min-width: 1280px) and (max-width: 1919px)', styles: this.ngStyleLg },
      { name: 'xl', query: '(min-width: 1920px)', styles: this.ngStyleXl },

      // Less than (menor que)
      { name: 'lt-sm', query: '(max-width: 599px)', styles: this.ngStyleLtSm }, // < 600px
      { name: 'lt-md', query: '(max-width: 959px)', styles: this.ngStyleLtMd }, // < 960px
      { name: 'lt-lg', query: '(max-width: 1279px)', styles: this.ngStyleLtLg }, // < 1280px
      { name: 'lt-xl', query: '(max-width: 1919px)', styles: this.ngStyleLtXl }, // < 1920px

      // Greater than (mayor que)
      { name: 'gt-xs', query: '(min-width: 600px)', styles: this.ngStyleGtXs }, // >= 600px
      { name: 'gt-sm', query: '(min-width: 960px)', styles: this.ngStyleGtSm }, // >= 960px
      { name: 'gt-md', query: '(min-width: 1280px)', styles: this.ngStyleGtMd }, // >= 1280px
      { name: 'gt-lg', query: '(min-width: 1920px)', styles: this.ngStyleGtLg }  // >= 1920px
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
