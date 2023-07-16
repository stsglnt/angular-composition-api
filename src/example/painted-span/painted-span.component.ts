import { Component, OnInit, Input, inject } from '@angular/core';
import { BoldDirective } from '../../directives/bold.directive';
import { ColorDirective } from '../../directives/color.directive';
import { UnderlineDirective } from '../../directives/underline.directive';

@Component({
  selector: 'app-painted-span',
  templateUrl: './painted-span.component.html',
  standalone: true,
  hostDirectives: [
    BoldDirective,
    UnderlineDirective,
    {
      directive: ColorDirective,
      inputs: ['color:paintedColor'],
    },
  ],
})
export class PaintedSpanComponent implements OnInit {
  @Input() text: string = '';
  colorDirective = inject(ColorDirective)

  ngOnInit() {
    // this.colorDirective.color = "grey"
  }
}
