import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  model,
  Output,
  output,
  signal,
} from '@angular/core';
import { Lifter } from '../types/lifter';

@Component({
  selector: 'app-lifter-side-nav',
  imports: [],
  templateUrl: './lifter-side-nav.component.html',
  styleUrl: './lifter-side-nav.component.scss',
})
export class LifterSideNavComponent {
  //----------inputs----------------
  readonly lifter = input.required<Lifter>();
  readonly avatar = model.required<string>();
  readonly isSelected = input.required<boolean>();

  //----------outputs----------------
  //alternative for output and add a type is safer
  //@Output() select = new EventEmitter<string>();
  select = output<string>();

  imgPath = computed(() => {
    return this.avatar();
  });

  selectLifter() {
    this.select.emit(this.lifter().name);
  }
}
