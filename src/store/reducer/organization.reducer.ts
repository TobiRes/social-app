import {Organization} from '../../models/organization.model';
import {OrganizationActions, REGISTER_ORG_COMPLETE, START_ORG_REGISTRATION, TEMPORARY_ORG} from '../actions/organization.action';

export interface OrganizationState {
  orgLoggedIn: boolean;
  registrationInProcess: boolean;
  temporaryOrgData?: Organization;
  loggedInOrg?: Organization;
}

const initialState: OrganizationState = {
  orgLoggedIn: false,
  registrationInProcess: false
}

export function organizationReducer(state: OrganizationState = initialState, action: OrganizationActions): OrganizationState {
  switch (action.type) {
    case START_ORG_REGISTRATION:
      return {
        ...state,
        registrationInProcess: true
      };
    case TEMPORARY_ORG:
      return {
        ...state,
        temporaryOrgData: action.payload
      };
    case REGISTER_ORG_COMPLETE:
      return {
        ...state,
        orgLoggedIn: true,
        registrationInProcess: false,
        temporaryOrgData: null,
        loggedInOrg: action.payload
      };
    default:
      return state;
  }
}
