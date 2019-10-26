import {CLOSE_SIDEBAR, OPEN_SIDEBAR, SidebarActions} from '../actions/siderbar.action';

export function sidebarReducer(state: boolean = false, action: SidebarActions): boolean {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return true;
    case CLOSE_SIDEBAR:
      return false;
    default:
      return state;
  }
}
