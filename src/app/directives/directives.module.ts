import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCodeDirective } from './highlight.directive';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';
import { FlexLayoutDirective } from './flex-layout.directive';
import { ResponsiveClassDirective } from './responsive-class.directive';
import { ResponsiveStyleDirective } from './responsive-style.directive';

@NgModule({
  declarations: [
    HighlightCodeDirective,
    AnimateOnScrollDirective,
    FlexLayoutDirective,
    ResponsiveClassDirective,
    ResponsiveStyleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightCodeDirective,
    AnimateOnScrollDirective,
    FlexLayoutDirective,
    ResponsiveClassDirective,
    ResponsiveStyleDirective
  ]
})
export class DirectivesModule { }
