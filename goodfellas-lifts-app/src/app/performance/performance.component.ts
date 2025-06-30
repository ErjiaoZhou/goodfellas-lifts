import { Component, input } from '@angular/core';
import { Lifter } from '../types/lifter';

@Component({
  selector: 'app-performance',
  imports: [],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.scss',
})
export class PerformanceComponent {
  lifter = input.required<Lifter | undefined>();
}
