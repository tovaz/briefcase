import { Component, Input, OnInit, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

export interface ImageSliderConfig {
  autoplay?: boolean;
  delay?: number;
  loop?: boolean;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
  showNavigation?: boolean;
  showPagination?: boolean;
  disableOnInteraction?: boolean;
}

@Component({
    selector: 'app-image-slider',
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ImageSliderComponent implements OnInit, AfterViewInit {
  @Input() images: string[] = [];
  @ViewChild('swiperEl', { static: true }) swiperEl?: ElementRef<any>;
  @Input() config: ImageSliderConfig = {
    autoplay: true,
    delay: 3000,
    loop: true,
    effect: 'slide',
    showNavigation: true,
    showPagination: true,
    disableOnInteraction: true
  };
  constructor() {
    register();
  }

  ngOnInit(): void {
    if (!this.images || this.images.length === 0) {
      console.warn('ImageSliderComponent: No images provided');
    }
  }

  ngAfterViewInit(): void {
    // Inicializa cuando el elemento ya está en el DOM
    this.swiperEl?.nativeElement?.initialize();
  }
}
