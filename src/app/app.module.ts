import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ProjectCardComponent } from "src/components/project-card/project-card.component";
import { ProjectSearchComponent } from "src/components/project-search/project-search.component";
import { SearchFormComponent } from "src/components/search-form/search-form.component";
import { LandingPageComponent } from "../components/landing-page/landing-page.component";
import { MainContainerComponent } from "../components/main-container/main-container.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { ProjectCardListComponent } from "../components/project-card-list/project-card-list.component";
import { reducers } from "../store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  {
    path: "welcome",
    component: LandingPageComponent
  },
  {
    path: "search",
    component: ProjectSearchComponent
  },
  { path: "", redirectTo: "/welcome", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NavbarComponent,
    LandingPageComponent,
    SearchFormComponent,
    ProjectCardComponent,
    ProjectCardListComponent,
    ProjectSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
