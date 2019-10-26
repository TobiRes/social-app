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
      title: "Betreuung an Altennachmittag",
      id: "",
      createdBy: "Caritas",
      location: { city: "Offenburg", street: "street", zip: "zip" },
      startDate: "30.10.2019",
      endDate: "endDate",
      shortDescription: "Betreuung am Altenachmittags der Caritas",
      longDescription: "longDesc",
      picture: "../../assets/cares.jpg",
      participantTotal: 4,
      participantTaken: 2
    };
    this.projects[1] = {
      title: "Nachhilfe",
      id: "",
      createdBy: "Nachhilfewerk e.V.",
      location: { city: "Lahr", street: "street", zip: "zip" },
      startDate: "08.11.2019",
      endDate: "endDate",
      shortDescription:
        "Unterstützung von Schülern im Alter von 6-12 Jahren bei Hausaufgaben ",
      longDescription: "longDesc",
      picture: "../../assets/school.jpg",
      participantTotal: 2,
      participantTaken: 0
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
      picture: "../../assets/dog.jpg",
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
      picture: "../../assets/builder.jpg",
      participantTotal: 10,
      participantTaken: 4
    };
    this.projects[4] = {
      title: "Project",
      id: "",
      createdBy: "me",
      location: { city: "og", street: "street", zip: "zip" },
      startDate: "startDate",
      endDate: "endDate",
      shortDescription:
        "This is a awsome short description and will help me identify problems, thanks ",
      longDescription: "longDesc",
      picture: "../../assets/builder.jpg",
      participantTotal: 10,
      participantTaken: 4
    };
  }
}
