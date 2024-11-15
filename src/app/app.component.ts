import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {clear, countSelector, decrease, increase} from './reducers/counter';
import {map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-grom';
  updatedAt?: number;
  count$;
  cannotDecrease$;

  constructor(private store: Store) {
    this.count$ = this.store.select(countSelector);
    this.cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
  }

  increase() {
    this.updatedAt = Date.now();
    this.store.dispatch(increase());
  }

  decrease() {
    this.updatedAt = Date.now();
    this.store.dispatch(decrease());
  }

  clear() {
    this.updatedAt = Date.now();
    this.store.dispatch(clear());
  }
}
