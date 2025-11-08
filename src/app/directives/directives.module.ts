import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCodeDirective } from './highlight.directive';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';
import { FlexLayoutDirective } from './flex-layout.directive';

@NgModule({
  declarations: [
    HighlightCodeDirective,
    AnimateOnScrollDirective,
    FlexLayoutDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightCodeDirective,
    AnimateOnScrollDirective,
    FlexLayoutDirective
  ]
})
export class DirectivesModule { }
