import { Address } from "./address.model";
import { StuffAndThings } from "./stuff-and-things.model";

export interface ProjectDTO {
  title: string;
  createdBy: string;
  shortDescription: string;
  longDescription: string;
  startDate: string;
  endDate: string;
  location: Address;
  stuffAndThings: StuffAndThings;
  picture: string;
}

export interface Project extends ProjectDTO {
  id: string;
}
