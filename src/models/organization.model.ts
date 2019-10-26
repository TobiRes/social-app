import {Address} from './address.model';
import {Project} from './project.model';

export interface Organization {
  id?: string;
  name: string;
  username: string;
  password: string;
  shortDescription: string;
  logo?: string;
  description: string;
  homepage?: string;
  email: string;
  phone: string;
  address: Address;
  picturs?: string[];
  pastProjects?: Project[];
  activeProjects?: Project[];
}
