import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: false
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animationName: string = '';
  @Input() offset: number = 0;
  @Input() delay: number = 0;
  @Input() repeat: boolean = false;

  private observer!: IntersectionObserver;
  private isAnimated = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Configuración del Intersection Observer
    const options = {
      root: null, // viewport
      rootMargin: `${this.offset}px`,
      threshold: 0.1 // 10% del elemento debe ser visible
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Si el elemento es visible y no se ha animado (o repeat está activo)
        if (entry.isIntersecting && (!this.isAnimated || this.repeat)) {
          // Si hay un delay, esperamos antes de aplicar la animación
          if (this.delay > 0) {
            setTimeout(() => {
              this.startAnimation();
            }, this.delay);
          } else {
            this.startAnimation();
          }

          // Si no queremos repetir la animación, dejamos de observar
          if (!this.repeat) {
            this.observer.unobserve(entry.target);
          }
        } else if (!entry.isIntersecting && this.repeat) {
          // Si el elemento no es visible y repeat está activo, removemos las clases
          this.removeAnimation();
        }
      });
    }, options);

    // Empezamos a observar el elemento
    this.observer.observe(this.el.nativeElement);

    // Aseguramos que el elemento comience oculto
    if (this.animationName.includes('animated')) {
      this.renderer.addClass(this.el.nativeElement, 'hide-on-init');
    }
  }

  ngOnDestroy() {
    // Limpieza al destruir el componente
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private startAnimation() {
    // Removemos la clase hide-on-init si existe
    this.renderer.removeClass(this.el.nativeElement, 'hide-on-init');

    // Aplicamos las clases de animación
    if (this.animationName) {
      const animations = this.animationName.split(' ');
      animations.forEach(animation => {
        if (animation) {
          this.renderer.addClass(this.el.nativeElement, animation.trim());
        }
      });
    }

    this.isAnimated = true;
  }

  private removeAnimation() {
    // Removemos las clases de animación para permitir que se repita
    if (this.animationName) {
      const animations = this.animationName.split(' ');
      animations.forEach(animation => {
        if (animation) {
          this.renderer.removeClass(this.el.nativeElement, animation.trim());
        }
      });
    }
    this.isAnimated = false;
  }
}
