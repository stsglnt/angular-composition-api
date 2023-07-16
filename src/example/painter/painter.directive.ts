import { Directive } from '@angular/core';
import { BoldDirective } from '../../directives/bold.directive';
import { ColorDirective } from '../../directives/color.directive';
import { UnderlineDirective } from '../../directives/underline.directive';

@Directive({
  selector: '[appPainter]',
  standalone: true,
  hostDirectives: [BoldDirective, ColorDirective, UnderlineDirective],
})
export class PainterDirective {}
