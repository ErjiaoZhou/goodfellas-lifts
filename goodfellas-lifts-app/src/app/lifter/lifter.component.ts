import {Component, computed, signal} from '@angular/core';
import {LIFTERS} from '../lifters';

const randomIndex = Math.floor(Math.random() * LIFTERS.length);

@Component({
  selector: 'app-lifter',
  imports: [],
  templateUrl: './lifter.component.html',
  styleUrl: './lifter.component.scss'
})
export class LifterComponent {
  selectedLifter= signal(LIFTERS[randomIndex]);
  imgPath = computed(() => this.selectedLifter().avatar);

  // this getter was changed to computed
  /*get imgPath(){
    return this.selectedLifter().avatar //til now worked when placed in public
    //return 'assets/lifters/' + this.selectedLifter.avatar;
  }*/

  selectLifter() {
    const randomIndex = Math.floor(Math.random() * LIFTERS.length);
    this.selectedLifter.set(LIFTERS[randomIndex]);
  }
}
