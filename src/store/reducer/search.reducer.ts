import { Project } from "src/models/project.model";
import {
  LOAD_SEARCH,
  SAVE_SEARCH,
  SearchAction
} from "../actions/search.actions";

export interface SearchState {
  place: string;
  topic: string;
  time: Date;
  category: String;
  projects?: Project[];
}

export function searchReducer(
  state: SearchState = {
    place: "",
    topic: "",
    time: new Date(),
    category: "",
    projects: []
  },
  action: SearchAction
): SearchState {
  switch (action.type) {
    case SAVE_SEARCH:
      return {
        place: action.payload.place,
        time: action.payload.time,
        topic: action.payload.topic,
        category: action.payload.category
      };
    case LOAD_SEARCH:
      return state;

    default:
      return state;
  }
}
