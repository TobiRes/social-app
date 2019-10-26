import {ActionReducerMap} from '@ngrx/store';
import {counterReducer, CounterState} from './reducer/counter.reducer';
import {InjectionToken} from '@angular/core';
import {sidebarReducer} from './reducer/siderbar.reducer';
import {organizationReducer, OrganizationState} from './reducer/organization.reducer';
import {userReducer, UserState} from './reducer/user.reducer';

export interface State {
  counter: CounterState;
  sidebarActive: boolean;
  organizationState: OrganizationState;
  userState: UserState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  sidebarActive: sidebarReducer,
  organizationState: organizationReducer,
  userState: userReducer
}

export const reducerToken = new InjectionToken<ActionReducerMap<State>>("Registered Reducers");
Object.assign(reducerToken, reducers);
