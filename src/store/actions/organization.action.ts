import {Action} from '@ngrx/store';
import {Organization} from '../../models/organization.model';

export const START_ORG_REGISTRATION = '[OrgAction] Start Org Registration';
export const REGISTER_ORG = '[OrgAction] Register Org';
export const REGISTER_ORG_COMPLETE = '[OrgAction] Register Org Complete';
export const TEMPORARY_ORG = '[OrgAction] Temporary Org';

export class StartOrgRegistrationAction implements Action {
  readonly type = START_ORG_REGISTRATION;
}

export class TemporaryOrgAction implements Action {
  readonly type = TEMPORARY_ORG;

  constructor(public payload: Organization) {
  }
}

export class RegisterOrgAction implements Action {
  readonly type = REGISTER_ORG;

  constructor(public payload: Organization) {
  }
}

export class RegisterOrgCompleteAction implements Action {
  readonly type = REGISTER_ORG_COMPLETE;

  constructor(public payload: Organization) {
  }
}



export type OrganizationActions =
  StartOrgRegistrationAction
  | TemporaryOrgAction
  | RegisterOrgAction
  | RegisterOrgCompleteAction;
