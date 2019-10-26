import {Component, OnDestroy, OnInit} from '@angular/core';
import {State} from '../../store';
import {Store} from '@ngrx/store';
import {CloseSidebarAction, OpenSidebarAction} from '../../store/actions/siderbar.action';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuActive = false;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.subscribeToSidebarState();
  }

  ngOnDestroy(){}

  menuClicked() {
    if (!this.menuActive) {
      this.store.dispatch(new OpenSidebarAction());
    } else {
      this.store.dispatch(new CloseSidebarAction());
    }
  }

  private subscribeToSidebarState() {
    this.store.select((state: State) => state.sidebarActive)
      .pipe(untilDestroyed(this))
      .subscribe((sidebarActive: boolean) => this.menuActive = sidebarActive);
  }
}
