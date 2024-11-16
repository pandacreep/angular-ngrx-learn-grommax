import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {clear, countSelector, decrease, increase, updatedAtSelector} from './reducers/counter';
import {map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-grom';
  count$;
  cannotDecrease$;
  updatedAt$;

  constructor(private store: Store) {
    this.count$ = this.store.select(countSelector);
    this.cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
    this.updatedAt$ = this.store.select(updatedAtSelector);
  }

  increase() {
    this.store.dispatch(increase());
  }

  decrease() {
    this.store.dispatch(decrease());
  }

  clear() {
    this.store.dispatch(clear());
  }
}
