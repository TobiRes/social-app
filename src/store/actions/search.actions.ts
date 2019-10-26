import { Action } from "@ngrx/store";
import { SearchState } from "../reducer/search.reducer";

export const SAVE_SEARCH = "[SaveSearch] Save search";
export const LOAD_SEARCH = "[LoadSearch] Load search";

export class SaveSearchAction implements Action {
  readonly type = SAVE_SEARCH;

  constructor(public payload: SearchState) {}
}

export class LoadSearchAction implements Action {
  readonly type = LOAD_SEARCH;

  // constructor(public payload: number) {}
}

export type SearchAction = SaveSearchAction | LoadSearchAction;
