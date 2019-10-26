import { InjectionToken } from "@angular/core";
import { ActionReducerMap } from "@ngrx/store";
import { counterReducer, CounterState } from "./reducer/counter.reducer";
import { searchReducer, SearchState } from "./reducer/search.reducer";

export interface State {
  counter: CounterState;
  searchProps: SearchState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  searchProps: searchReducer
};

export const reducerToken = new InjectionToken<ActionReducerMap<State>>(
  "Registered Reducers"
);
Object.assign(reducerToken, reducers);
