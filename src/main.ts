import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [ContainerComponent],
  template: `
    <app-container/>
  `,
})
export class App {}

bootstrapApplication(App);
