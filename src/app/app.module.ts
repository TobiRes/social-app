import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MainContainerComponent } from "../components/main-container/main-container.component";
import { SearchFormComponent } from "../components/search-form/search-form.component";
import { reducers } from "../store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, MainContainerComponent, SearchFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
