import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {OrganizationState} from '../../store/reducer/organization.reducer';
import {Organization} from '../../models/organization.model';
import {User} from '../../models/user.model';
import * as uuid from 'uuid';
import {RegisterOrgAction} from '../../store/actions/organization.action';
import {RegisterUserAction} from '../../store/actions/user.action';
import {UserState} from '../../store/reducer/user.reducer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  orgRegInProgress: boolean;
  temporaryOrgData: Organization;
  username: string;
  password: string;
  mail: string;
  userRegInProgress = false;
  private user: User;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.subscribeToOrgRegistration();
    this.subscribeToUserRegistration();
  }

  ngOnDestroy() {
  }

  private subscribeToOrgRegistration() {
    this.store.select((state: State) => state.organizationState)
      .pipe(untilDestroyed(this))
      .subscribe((orgState: OrganizationState) => {
        this.orgRegInProgress = orgState.registrationInProcess;
        this.temporaryOrgData = orgState.temporaryOrgData;
      });
  }

  private subscribeToUserRegistration() {
    this.store.select((state: State) => state.userState)
      .pipe(untilDestroyed(this))
      .subscribe((userState: UserState) => {
        this.userRegInProgress = userState.userRegInProgress;
        if (this.userRegInProgress && !this.user) {
          this.initializeUser();
        }
      });
  }

  continueDisabled(): boolean {
    return this.password && this.mail && !!this.username;
  }

  continueRegistration() {
    if (this.userRegInProgress) {
      this.user.password = this.password;
      this.user.username = this.username;
      this.user.email = this.mail;
      this.store.dispatch(new RegisterUserAction(this.user));
    } else {
      this.temporaryOrgData.password = this.password;
      this.temporaryOrgData.email = this.mail;
      this.temporaryOrgData.username = this.username
      this.store.dispatch(new RegisterOrgAction(this.temporaryOrgData));
    }
  }

  private initializeUser() {
    this.user = {
      id: uuid.v4(),
      username: "",
      password: "",
      email: ""
    };
  }
}
