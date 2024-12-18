import { Component } from '@angular/core';
import { SafeLInkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLInkDirective]
})
export class LearningResourcesComponent {}
