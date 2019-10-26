import {ActionReducerMap} from '@ngrx/store';
import {counterReducer, CounterState} from './reducer/counter.reducer';
import {InjectionToken} from '@angular/core';
import {sidebarReducer} from './reducer/siderbar.reducer';

export interface State {
  counter: CounterState;
  sidebarActive: boolean;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  sidebarActive: sidebarReducer
}

export const reducerToken = new InjectionToken<ActionReducerMap<State>>("Registered Reducers");
Object.assign(reducerToken, reducers);
