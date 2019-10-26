import { Component, Input, OnInit } from "@angular/core";
import { Project } from "src/models/project.model";

@Component({
  selector: "app-project-card-list",
  templateUrl: "./project-card-list.component.html",
  styleUrls: ["./project-card-list.component.scss"]
})
export class ProjectCardListComponent implements OnInit {
  projects: Project[];
  @Input()
  title: string;

  constructor() {
    this.projects = [];
  }

  ngOnInit() {
    this.projects[0] = {
      title: "Project",
      id: "",
      createdBy: "me",
      location: { city: "og", street: "street", zip: "zip" },
      startDate: "startDate",
      endDate: "endDate",
      shortDescription:
        "This is a awsome short description and will help me identify problems, thanks ",
      longDescription: "longDesc",
      picture: "path to picture",
      participantTotal: 10,
      participantTaken: 4
    };
    this.projects[1] = {
      title: "Project",
      id: "",
      createdBy: "me",
      location: { city: "og", street: "street", zip: "zip" },
      startDate: "startDate",
      endDate: "endDate",
      shortDescription:
        "This is a awsome short description and will help me identify problems, thanks ",
      longDescription: "longDesc",
      picture: "path to picture",
      participantTotal: 10,
      participantTaken: 4
    };
    this.projects[2] = {
      title: "Project",
      id: "",
      createdBy: "me",
      location: { city: "og", street: "street", zip: "zip" },
      startDate: "startDate",
      endDate: "endDate",
      shortDescription:
        "This is a awsome short description and will help me identify problems, thanks ",
      longDescription: "longDesc",
      picture: "path to picture",
      participantTotal: 10,
      participantTaken: 4
    };
    this.projects[3] = {
      title: "Project",
      id: "",
      createdBy: "me",
      location: { city: "og", street: "street", zip: "zip" },
      startDate: "startDate",
      endDate: "endDate",
      shortDescription:
        "This is a awsome short description and will help me identify problems, thanks ",
      longDescription: "longDesc",
      picture: "path to picture",
      participantTotal: 10,
      participantTaken: 4
    };
  }
}
