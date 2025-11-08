import { Component, Input, OnInit, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ElementRef } from '@angular/core';
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
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageSliderComponent implements OnInit {
  @Input() images: string[] = [];
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
    register(); // Registrar los elementos personalizados de Swiper
  }

  ngOnInit(): void {
    if (!this.images || this.images.length === 0) {
      console.warn('ImageSliderComponent: No images provided');
    }
  }
}
