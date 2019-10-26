import {ActionReducerMap} from '@ngrx/store';
import {counterReducer, CounterState} from './reducer/counter.reducer';
import {sidebarReducer} from './reducer/siderbar.reducer';
import {organizationReducer, OrganizationState} from './reducer/organization.reducer';
import {userReducer, UserState} from './reducer/user.reducer';
import {AuthEffects} from './effects/auth.effects';
import { InjectionToken } from "@angular/core";
import { ActionReducerMap } from "@ngrx/store";
import { counterReducer, CounterState } from "./reducer/counter.reducer";
import { searchReducer, SearchState } from "./reducer/search.reducer";

export interface State {
  counter: CounterState;
  sidebarActive: boolean;
  organizationState: OrganizationState;
  userState: UserState;
  searchProps: SearchState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  sidebarActive: sidebarReducer,
  organizationState: organizationReducer,
  userState: userReducer
}
  counter: counterReducer,
  searchProps: searchReducer
};

export const reducerToken = new InjectionToken<ActionReducerMap<State>>(
  "Registered Reducers"
);
Object.assign(reducerToken, reducers);
export const effects = [
  AuthEffects
];
