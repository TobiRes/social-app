import { Component, OnInit } from "@angular/core";
import { Project } from "src/models/project.model";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"]
})
export class ProjectCardComponent implements OnInit {
  project: Project;
  constructor() {}

  ngOnInit() {}
}
