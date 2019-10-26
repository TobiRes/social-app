import {Organization} from '../models/organization.model';
import * as uuid from 'uuid';

export class OrganizationUtil {
  static getEmptyOrganization(): Organization {
    return {
      id: uuid.v4(),
      name: "",
      username: "",
      password: "",
      shortDescription: "",
      description: "",
      homepage: "",
      email: "",
      phone: "",
      address: {
        street: "",
        zip: "",
        city: "",
      }
    };
  }

  static allDataAvailable(organization: Organization): boolean {
    return organization.name
      && organization.description
      && organization.shortDescription
      && organization.homepage
      && organization.email
      && organization.phone
      && organization.address.street
      && organization.address.city
      && !!organization.address.zip;
  }
}
