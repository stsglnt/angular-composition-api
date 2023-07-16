import { Component, OnInit } from '@angular/core';
import { BoldDirective } from '../directives/bold.directive';
import { ColorDirective } from '../directives/color.directive';
import { UnderlineDirective } from '../directives/underline.directive';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  standalone: true,
  imports: [BoldDirective, ColorDirective, UnderlineDirective],
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
