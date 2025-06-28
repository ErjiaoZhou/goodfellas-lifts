import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LifterComponent} from './lifter/lifter.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LifterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'goodfellas-lifts-app';
}
