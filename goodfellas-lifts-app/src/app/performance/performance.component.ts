import { Component, input } from '@angular/core';
import { Lifter } from '../types/lifter';
import { MissionComponent } from './mission/mission.component';
import { dummyMissions } from '../dummy-missions';

@Component({
  selector: 'app-performance',
  imports: [MissionComponent],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.scss',
})
export class PerformanceComponent {
  lifter = input.required<Lifter | undefined>();

  missions = dummyMissions;

  get selectedLifterMissions() {
    return this.missions.filter((task) => task.userId === this.lifter()?.id);
  }
}
