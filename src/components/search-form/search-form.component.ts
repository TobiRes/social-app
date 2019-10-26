import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { State } from "src/store";
import { SaveSearchAction } from "src/store/actions/search.actions";
import { SearchState } from "src/store/reducer/search.reducer";

const initialState: SearchState = {
  place: "",
  topic: "",
  time: new Date(),
  category: ""
};
@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  constructor(private store: Store<State>, private router: Router) {
    this.searchProps.place = "asd";
  }

  searchProps: SearchState = initialState;

  storeTo() {
    this.store.dispatch(new SaveSearchAction(this.searchProps));
    // this.router.navigate(["/welcome"]);
  }

  updatePlace(value: string) {
    this.searchProps.place = value;
  }
  updateTopic(value: string) {
    this.searchProps.topic = value;
  }

  ngOnInit() {}
}
