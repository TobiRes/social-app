import {ActionReducerMap} from '@ngrx/store';
import {counterReducer, CounterState} from './reducer/counter.reducer';
import {InjectionToken} from '@angular/core';

export interface State {
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
}

export const reducerToken = new InjectionToken<ActionReducerMap<State>>("Registered Reducers");
Object.assign(reducerToken, reducers);
