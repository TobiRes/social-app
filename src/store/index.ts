import { InjectionToken } from "@angular/core";
import { ActionReducerMap } from "@ngrx/store";
import { AuthEffects } from "./effects/auth.effects";
import { counterReducer, CounterState } from "./reducer/counter.reducer";
import {
  organizationReducer,
  OrganizationState
} from "./reducer/organization.reducer";
import { searchReducer, SearchState } from "./reducer/search.reducer";
import { sidebarReducer } from "./reducer/siderbar.reducer";
import { userReducer, UserState } from "./reducer/user.reducer";

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
  userState: userReducer,
  searchProps: searchReducer
};

export const reducerToken = new InjectionToken<ActionReducerMap<State>>(
  "Registered Reducers"
);
Object.assign(reducerToken, reducers);
export const effects = [AuthEffects];
