import {Action} from '@ngrx/store';

export const OPEN_SIDEBAR = '[SidebarAction] Open Sidebar';
export const CLOSE_SIDEBAR = '[SidebarAction] Close Sidebar';

export class OpenSidebarAction implements Action {
  readonly type = OPEN_SIDEBAR;
}

export class CloseSidebarAction implements Action {
  readonly type = CLOSE_SIDEBAR;
}

export type SidebarActions = OpenSidebarAction | CloseSidebarAction;
