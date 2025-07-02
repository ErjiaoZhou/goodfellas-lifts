import { Component, input } from '@angular/core';
import { Mission } from '../../types/mission';

@Component({
  selector: 'app-mission',
  imports: [],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss',
})
export class MissionComponent {
  mission = input.required<Mission>();
}
