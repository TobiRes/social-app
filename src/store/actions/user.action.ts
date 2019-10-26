import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export const START_USER_REGISTRATION = '[UserAction] Start User Registration';
export const REGISTER_USER = '[UserAction] Register User';
export const REGISTER_USER_COMPLETE = '[OrgAction] Register User Complete';
export const LOGIN_USER = '[OrgAction] Login User';
export const LOGIN_USER_COMPLETE = '[OrgAction] Login User Complete';

export class StartUserRegAction implements Action {
  readonly type = START_USER_REGISTRATION;
}

export class LoginUserAction implements Action {
  readonly type = LOGIN_USER;

  constructor(public payload: User) {
  }
}

export class LoginUserCompleteAction implements Action {
  readonly type = LOGIN_USER_COMPLETE;

  constructor(public payload: User) {
  }
}

export class RegisterUserAction implements Action {
  readonly type = REGISTER_USER;

  constructor(public payload: User) {
  }
}

export class RegisterUserCompleteAction implements Action {
  readonly type = REGISTER_USER_COMPLETE;

  constructor(public payload: User) {
  }
}



export type UserActions =
  RegisterUserAction
  | RegisterUserCompleteAction
  | StartUserRegAction
  | LoginUserAction
  | LoginUserCompleteAction;
