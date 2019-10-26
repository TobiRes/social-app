import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import {CounterState} from '../../store/reducer/counter.reducer';
import {IncrementAction} from '../../store/actions/counter.action';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {
  counter: number;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.subscribeToCounterState();
  }

  ngOnDestroy() {}

  private subscribeToCounterState() {
    this.store.select((state: State) => state.counter)
      .pipe(untilDestroyed(this))
      .subscribe((counter: CounterState) => this.counter = counter.counter);
  }

  incrementCounter() {
    this.store.dispatch(new IncrementAction(this.counter + 1));
  }

  decrementCounter() {
    this.store.dispatch(new IncrementAction(this.counter - 1));
  }
}
