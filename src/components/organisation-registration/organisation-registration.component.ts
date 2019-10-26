import { Component, OnInit } from '@angular/core';
import {Organization} from '../../models/organization.model';
import {OrganizationUtil} from '../../util/organization.util';

@Component({
  selector: 'app-organisation-registration',
  templateUrl: './organisation-registration.component.html',
  styleUrls: ['./organisation-registration.component.scss']
})
export class OrganisationRegistrationComponent implements OnInit {

  organization: Organization = OrganizationUtil.getEmptyOrganization();
  activeOrganizationRegistration = true;

  constructor() { }

  ngOnInit() {
  }

  continueDisabled(): boolean {
    return !OrganizationUtil.allDataAvailable(this.organization);
  }

  continueRegistration() {
    this.activeOrganizationRegistration = false;
  }
}
