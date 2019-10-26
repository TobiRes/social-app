import {User} from '../../models/user.model';
import {LOGIN_USER_COMPLETE, REGISTER_USER_COMPLETE, START_USER_REGISTRATION, UserActions} from '../actions/user.action';

export interface UserState {
  userLoggedIn: boolean;
  userRegInProgress: boolean;
  loggedInUser?: User;
}

const initialState: UserState = {
  userLoggedIn: false,
  userRegInProgress: false
}

export function userReducer(state: UserState = initialState, action: UserActions): UserState {
  switch (action.type) {
    case START_USER_REGISTRATION:
      return {
        ...state,
        userRegInProgress: true
      }
    case LOGIN_USER_COMPLETE:
    case REGISTER_USER_COMPLETE:
      return {
        ...state,
        loggedInUser: action.payload,
        userRegInProgress: false
      };
    default:
      return state;
  }
}
