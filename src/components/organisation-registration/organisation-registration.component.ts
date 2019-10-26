import { Component, OnInit } from '@angular/core';
import {Organization} from '../../models/organization.model';
import {OrganizationUtil} from '../../util/organization.util';
import {State} from '../../store';
import {Store} from '@ngrx/store';
import {TemporaryOrgAction} from '../../store/actions/organization.action';

@Component({
  selector: 'app-organisation-registration',
  templateUrl: './organisation-registration.component.html',
  styleUrls: ['./organisation-registration.component.scss']
})
export class OrganisationRegistrationComponent implements OnInit {

  organization: Organization = OrganizationUtil.getEmptyOrganization();
  activeOrganizationRegistration = true;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  continueDisabled(): boolean {
    return !OrganizationUtil.allDataAvailable(this.organization);
  }

  continueRegistration() {
    this.activeOrganizationRegistration = false;
    this.store.dispatch(new TemporaryOrgAction(this.organization));
  }
}
