import {Project} from './project.model';

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  birthday: string;
  phone?: string;
  profilePicture?: string;
  pastProjects?: Project[];
  activeProjects?: Project[];
}
