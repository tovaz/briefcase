import { Directive, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appScrollClass]',
  standalone: false
})
export class ScrollClassDirective implements OnInit, OnDestroy {
  @Input() scrollThreshold: number = 50; // Pixels para activar el cambio
  @Input() scrolledClass: string = 'scrolled'; // Clase cuando se scrollea
  @Input() topClass: string = 'at-top'; // Clase cuando está en el top
  @Input() scrollElementId?: string; // ID del elemento con scroll (opcional)

  private isScrolled = false;
  private scrollSubscription?: Subscription;
  private scrollElement?: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Inicialmente agregar la clase at-top
    this.renderer.addClass(this.el.nativeElement, this.topClass);

    // Determinar el elemento que tiene el scroll
    if (this.scrollElementId) {
      const container = this.document.getElementById(this.scrollElementId);

      if (container) {
        // Buscar mat-sidenav-content dentro del contenedor
        const sidenavContent = container.querySelector('mat-sidenav-content');

        if (sidenavContent) {
          this.scrollElement = sidenavContent as HTMLElement;
          console.log('ScrollClassDirective: Detectando scroll en mat-sidenav-content');
        } else {
          // Si no hay mat-sidenav-content, usar el contenedor directamente
          this.scrollElement = container;
          console.log('ScrollClassDirective: Detectando scroll en el contenedor');
        }
      } else {
        console.warn(`ScrollClassDirective: No se encontró el elemento con ID "${this.scrollElementId}"`);
      }
    }

    // Si no se especificó ID o no se encontró, usar document
    const scrollTarget = this.scrollElement || this.document;

    // Escuchar el scroll
    this.scrollSubscription = fromEvent(scrollTarget, 'scroll', { passive: true })
      .pipe(throttleTime(16)) // ~60fps
      .subscribe(() => this.onScroll());

    // Verificar posición inicial
    this.onScroll();
  }

  ngOnDestroy(): void {
    this.scrollSubscription?.unsubscribe();
  }

  private onScroll(): void {
    let scrollPosition = 0;

    if (this.scrollElement) {
      // Si es un elemento específico
      scrollPosition = this.scrollElement.scrollTop;
    } else {
      // Si es el documento
      scrollPosition = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    }

    if (scrollPosition > this.scrollThreshold && !this.isScrolled) {
      // Scrolleado hacia abajo
      this.isScrolled = true;
      this.renderer.removeClass(this.el.nativeElement, this.topClass);
      this.renderer.addClass(this.el.nativeElement, this.scrolledClass);
    } else if (scrollPosition <= this.scrollThreshold && this.isScrolled) {
      // Vuelto al top
      this.isScrolled = false;
      this.renderer.removeClass(this.el.nativeElement, this.scrolledClass);
      this.renderer.addClass(this.el.nativeElement, this.topClass);
    }
  }
}
