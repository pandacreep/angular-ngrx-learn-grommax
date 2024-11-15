import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-grom';
  counter = 0;
  updatedAt?: number;

  get cannotDecrease() {
    return this.counter <= 0;
  }

  increase() {
    this.updatedAt = Date.now();
    this.counter++;
  }

  decrease() {
    this.updatedAt = Date.now();
    this.counter--;
  }

  clear() {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
