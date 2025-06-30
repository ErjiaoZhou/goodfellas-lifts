import { Component, input, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LifterSideNavComponent } from './lifter-side-nav/lifter-side-nav.component';
import { PerformanceComponent } from './performance/performance.component';
import { DummyLifters } from './dummy-lifters';
import { Lifter } from './types/lifter';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LifterSideNavComponent, PerformanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'goodfellas-lifts-app';
  lifters = DummyLifters;

  liferName = signal<string | null>(null);

  get selectedLifter() {
    return this.lifters.find((lifter) => lifter.name === this.liferName());
  }

  onSelectLifter(name: string) {
    this.liferName.set(name);
  }
}
