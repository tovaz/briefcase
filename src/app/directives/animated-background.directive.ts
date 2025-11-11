import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { BACKGROUND_STYLES, BACKGROUND_ANIMATIONS, BackgroundConfig } from './backgrounds.config';

/**
 * ============================================
 * ANIMATED BACKGROUND DIRECTIVE
 * ============================================
 * Directiva para aplicar fondos animados dinámicos
 * inspirados en iOS, macOS, Material Design y Flutter.
 *
 * Uso:
 * <div appAnimatedBackground backgroundStyle="ios"></div>
 * <div appAnimatedBackground backgroundStyle="material" [backgroundOpacity]="0.2"></div>
 *
 * Estilos disponibles:
 * - material: Material Design circles with gradients
 * - ios: iOS glassmorphism mesh gradient
 * - macos: macOS dynamic wallpaper waves
 * - flutter: Flutter geometric shapes morphing
 * - nordic: Nordic minimal geometric
 * - aurora: Aurora borealis flowing lights
 * - neon: Neon cyberpunk grid
 * - mesh: Modern gradient mesh
 */
@Directive({
  selector: '[appAnimatedBackground]',
  standalone: false
})
export class AnimatedBackgroundDirective implements OnInit, OnDestroy {
  @Input() backgroundStyle: string = 'material';
  @Input() backgroundOpacity?: number;
  @Input() backgroundBlur?: number;
  @Input() backgroundSize: string = '200px 200px';
  @Input() disableAnimation: boolean = false;

  private styleElement: HTMLStyleElement | null = null;
  private beforeElement: HTMLElement | null = null;
  private afterElement: HTMLElement | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.applyBackground();
    this.injectAnimations();
  }

  ngOnDestroy(): void {
    // Limpiar estilos inyectados
    if (this.styleElement && this.styleElement.parentNode) {
      this.styleElement.parentNode.removeChild(this.styleElement);
    }
  }

  private applyBackground(): void {
    const config = BACKGROUND_STYLES[this.backgroundStyle] || BACKGROUND_STYLES['material'];
    const element = this.el.nativeElement;

    // Asegurar que el elemento tenga position relative
    this.renderer.setStyle(element, 'position', 'relative');
    this.renderer.setStyle(element, 'overflow', 'hidden');

    // Aplicar fondo SVG con ::before
    if (config.svgPattern) {
      this.createBeforeElement(config);
    }

    // Aplicar gradientes con ::after
    if (config.gradients) {
      this.createAfterElement(config);
    }

    // Establecer variables CSS para uso opcional
    const opacity = this.backgroundOpacity ?? config.opacity ?? 0.15;
    this.renderer.setStyle(element, '--bg-opacity', opacity.toString());
    this.renderer.setStyle(element, '--bg-blur', `${this.backgroundBlur ?? config.blur ?? 1}px`);
  }

  private createBeforeElement(config: BackgroundConfig): void {
    const element = this.el.nativeElement;
    const opacity = this.backgroundOpacity ?? config.opacity ?? 0.15;
    const blur = this.backgroundBlur ?? config.blur ?? 1;

    // Crear pseudo-elemento ::before simulado
    const before = this.renderer.createElement('div');
    this.renderer.addClass(before, 'animated-bg-before');
    this.renderer.setStyle(before, 'content', '""');
    this.renderer.setStyle(before, 'position', 'absolute');
    this.renderer.setStyle(before, 'top', '-5%');
    this.renderer.setStyle(before, 'left', '-5%');
    this.renderer.setStyle(before, 'width', '110%');
    this.renderer.setStyle(before, 'height', '110%');
    this.renderer.setStyle(before, 'z-index', '-1');
    this.renderer.setStyle(before, 'opacity', opacity.toString());
    this.renderer.setStyle(before, 'background-image', config.svgPattern);
    this.renderer.setStyle(before, 'background-size', this.backgroundSize);
    this.renderer.setStyle(before, 'background-repeat', 'repeat');
    this.renderer.setStyle(before, 'pointer-events', 'none');
    this.renderer.setStyle(before, 'filter', `blur(${blur}px)`);

    // Aplicar animación si está habilitada
    if (!this.disableAnimation && config.animation) {
      this.renderer.setStyle(
        before,
        'animation',
        `${config.animation} ${config.animationDuration || '30s'} linear infinite`
      );
    }

    this.renderer.insertBefore(element, before, element.firstChild);
    this.beforeElement = before;
  }

  private createAfterElement(config: BackgroundConfig): void {
    const element = this.el.nativeElement;

    // Crear pseudo-elemento ::after simulado
    const after = this.renderer.createElement('div');
    this.renderer.addClass(after, 'animated-bg-after');
    this.renderer.setStyle(after, 'content', '""');
    this.renderer.setStyle(after, 'position', 'absolute');
    this.renderer.setStyle(after, 'top', '0');
    this.renderer.setStyle(after, 'left', '0');
    this.renderer.setStyle(after, 'width', '100%');
    this.renderer.setStyle(after, 'height', '100%');
    this.renderer.setStyle(after, 'z-index', '-1');
    this.renderer.setStyle(after, 'background', config.gradients || '');
    this.renderer.setStyle(after, 'pointer-events', 'none');

    this.renderer.insertBefore(element, after, element.firstChild);
    this.afterElement = after;
  }

  private injectAnimations(): void {
    // Verificar si ya existe el estilo
    const existingStyle = document.getElementById('animated-bg-keyframes');
    if (existingStyle) {
      return;
    }

    // Crear e inyectar keyframes
    this.styleElement = this.renderer.createElement('style');
    this.renderer.setAttribute(this.styleElement, 'id', 'animated-bg-keyframes');
    const text = this.renderer.createText(BACKGROUND_ANIMATIONS);
    this.renderer.appendChild(this.styleElement, text);
    this.renderer.appendChild(document.head, this.styleElement);
  }
}
