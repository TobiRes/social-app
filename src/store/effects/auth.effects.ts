import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, take} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {LOGIN_USER, LoginUserCompleteAction, REGISTER_USER} from '../actions/user.action';
import {User} from '../../models/user.model';
import {LOGIN_ORG} from '../actions/organization.action';
import {Organization} from '../../models/organization.model';

@Injectable()
export class AuthEffects {


  @Effect() loginUserAction$ = this.action$.pipe(
    ofType(LOGIN_USER),
    map((action: any) => action.payload),
    mergeMap((user: User) => {
      return this.authService.loginUser(user)
        .pipe(
          take(1),
          mergeMap((userLoggedIn: User) => of(new LoginUserCompleteAction(userLoggedIn))),
          catchError((error: Error) => of(console.error(error)))
        );
    })
  );

  @Effect() registerUserAction$ = this.action$.pipe(
    ofType(REGISTER_USER),
    map((action: any) => action.payload),
    mergeMap((user: User) => {
      return this.authService.registerUser(user)
        .pipe(
          take(1),
          mergeMap((userLoggedIn: User) => of(new LoginUserCompleteAction(userLoggedIn))),
          catchError((error: Error) => of(console.error(error)))
        );
    })
  );

  @Effect() loginOrg$ = this.action$.pipe(
    ofType(LOGIN_ORG),
    map((action: any) => action.payload),
    mergeMap((org: Organization) => {
      return this.authService.loginOrg(org)
        .pipe(
          take(1),
          mergeMap((loggedInOrg: Organization) => of(new LoginUserCompleteAction(loggedInOrg))),
          catchError((error: Error) => of(console.error(error)))
        );
    })
  );

  @Effect() registerOrg$ = this.action$.pipe(
    ofType(REGISTER_USER),
    map((action: any) => action.payload),
    mergeMap((org: Organization) => {
      return this.authService.registerOrg(org)
        .pipe(
          take(1),
          mergeMap((regOrg: Organization) => of(new LoginUserCompleteAction(regOrg))),
          catchError((error: Error) => of(console.error(error)))
        );
    })
  );


  constructor(private action$: Actions,
              private authService: AuthService) {
  }
}
