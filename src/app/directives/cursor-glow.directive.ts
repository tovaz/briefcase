import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCursorGlow]',
  standalone: false
})
export class CursorGlowDirective implements OnInit {
  @Input() glowColor: string = '63, 81, 181'; // Color RGB sin alpha (solo valores RGB)
  @Input() glowSize: number = 200; // Tamaño del glow en px
  @Input() glowIntensity: number = 0.6; // Intensidad/opacidad del brillo (0-1)

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Asegurar que el elemento tenga position relative y overflow hidden
    const element = this.el.nativeElement;

    // Usar setProperty en lugar de setStyle para las CSS variables
    element.style.setProperty('--glow-opacity', '0');
    element.style.setProperty('--mouse-x', '50%');
    element.style.setProperty('--mouse-y', '50%');
    element.style.setProperty('--glow-color-rgb', this.glowColor);
    element.style.setProperty('--glow-intensity', this.glowIntensity.toString());
    element.style.setProperty('--glow-size', `${this.glowSize}px`);

    console.log('CursorGlow initialized - RGB:', this.glowColor, 'Intensity:', this.glowIntensity, 'Size:', this.glowSize);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Actualizar las CSS variables para la posición del cursor
    element.style.setProperty('--mouse-x', `${x}px`);
    element.style.setProperty('--mouse-y', `${y}px`);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.setProperty('--glow-opacity', '1');
    console.log('Mouse entered, glow visible');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.setProperty('--glow-opacity', '0');
    console.log('Mouse left, glow hidden');
  }
}
