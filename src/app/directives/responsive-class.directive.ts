import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl]',
  standalone: false
})
export class ResponsiveClassDirective implements OnInit, OnDestroy {
  @Input('ngClass.xs') ngClassXs: string | string[] | object = '';
  @Input('ngClass.sm') ngClassSm: string | string[] | object = '';
  @Input('ngClass.md') ngClassMd: string | string[] | object = '';
  @Input('ngClass.lg') ngClassLg: string | string[] | object = '';
  @Input('ngClass.xl') ngClassXl: string | string[] | object = '';

  private mediaQueryListeners: Array<{ query: MediaQueryList; handler: () => void }> = [];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.setupResponsiveClasses();
  }

  ngOnDestroy() {
    // Limpiar los listeners
    this.mediaQueryListeners.forEach(({ query, handler }) => {
      query.removeEventListener('change', handler);
    });
  }

  private setupResponsiveClasses() {
    const breakpoints = [
      { name: 'xs', query: '(max-width: 599px)', classes: this.ngClassXs },
      { name: 'sm', query: '(min-width: 600px) and (max-width: 959px)', classes: this.ngClassSm },
      { name: 'md', query: '(min-width: 960px) and (max-width: 1279px)', classes: this.ngClassMd },
      { name: 'lg', query: '(min-width: 1280px) and (max-width: 1919px)', classes: this.ngClassLg },
      { name: 'xl', query: '(min-width: 1920px)', classes: this.ngClassXl }
    ];

    breakpoints.forEach(breakpoint => {
      if (breakpoint.classes) {
        const mediaQuery = window.matchMedia(breakpoint.query);

        const handler = () => {
          this.applyClasses(breakpoint.classes, mediaQuery.matches);
        };

        // Aplicar inmediatamente
        handler();

        // Escuchar cambios
        mediaQuery.addEventListener('change', handler);

        this.mediaQueryListeners.push({ query: mediaQuery, handler });
      }
    });
  }

  private applyClasses(classes: string | string[] | object, shouldApply: boolean) {
    if (!classes) return;

    let classList: string[] = [];

    if (typeof classes === 'string') {
      classList = classes.split(' ').filter(c => c);
    } else if (Array.isArray(classes)) {
      classList = classes;
    } else if (typeof classes === 'object') {
      classList = Object.keys(classes).filter(key => (classes as any)[key]);
    }

    classList.forEach(className => {
      if (shouldApply) {
        this.renderer.addClass(this.el.nativeElement, className);
      } else {
        this.renderer.removeClass(this.el.nativeElement, className);
      }
    });
  }
}
