import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl], [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl], [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]',
  standalone: false
})
export class ResponsiveClassDirective implements OnInit, OnDestroy {
  // Breakpoints exactos
  @Input('ngClass.xs') ngClassXs: string | string[] | object = '';
  @Input('ngClass.sm') ngClassSm: string | string[] | object = '';
  @Input('ngClass.md') ngClassMd: string | string[] | object = '';
  @Input('ngClass.lg') ngClassLg: string | string[] | object = '';
  @Input('ngClass.xl') ngClassXl: string | string[] | object = '';

  // Less than (menor que)
  @Input('ngClass.lt-sm') ngClassLtSm: string | string[] | object = '';
  @Input('ngClass.lt-md') ngClassLtMd: string | string[] | object = '';
  @Input('ngClass.lt-lg') ngClassLtLg: string | string[] | object = '';
  @Input('ngClass.lt-xl') ngClassLtXl: string | string[] | object = '';

  // Greater than (mayor que)
  @Input('ngClass.gt-xs') ngClassGtXs: string | string[] | object = '';
  @Input('ngClass.gt-sm') ngClassGtSm: string | string[] | object = '';
  @Input('ngClass.gt-md') ngClassGtMd: string | string[] | object = '';
  @Input('ngClass.gt-lg') ngClassGtLg: string | string[] | object = '';

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
      // Breakpoints exactos
      { name: 'xs', query: '(max-width: 599px)', classes: this.ngClassXs },
      { name: 'sm', query: '(min-width: 600px) and (max-width: 959px)', classes: this.ngClassSm },
      { name: 'md', query: '(min-width: 960px) and (max-width: 1279px)', classes: this.ngClassMd },
      { name: 'lg', query: '(min-width: 1280px) and (max-width: 1919px)', classes: this.ngClassLg },
      { name: 'xl', query: '(min-width: 1920px)', classes: this.ngClassXl },

      // Less than (menor que)
      { name: 'lt-sm', query: '(max-width: 599px)', classes: this.ngClassLtSm }, // < 600px
      { name: 'lt-md', query: '(max-width: 959px)', classes: this.ngClassLtMd }, // < 960px
      { name: 'lt-lg', query: '(max-width: 1279px)', classes: this.ngClassLtLg }, // < 1280px
      { name: 'lt-xl', query: '(max-width: 1919px)', classes: this.ngClassLtXl }, // < 1920px

      // Greater than (mayor que)
      { name: 'gt-xs', query: '(min-width: 600px)', classes: this.ngClassGtXs }, // >= 600px
      { name: 'gt-sm', query: '(min-width: 960px)', classes: this.ngClassGtSm }, // >= 960px
      { name: 'gt-md', query: '(min-width: 1280px)', classes: this.ngClassGtMd }, // >= 1280px
      { name: 'gt-lg', query: '(min-width: 1920px)', classes: this.ngClassGtLg }  // >= 1920px
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
