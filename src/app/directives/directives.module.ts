import { NgModule } from "@angular/core";
import { HighlightCodeDirective } from "./highlight.directive";
import { RunScriptsDirective } from "./runscript";

@NgModule({
  declarations: [HighlightCodeDirective, RunScriptsDirective],
  exports:[HighlightCodeDirective, RunScriptsDirective]
 })
 export class DirectivesModule{}
