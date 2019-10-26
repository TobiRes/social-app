import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainContainerComponent implements OnInit, OnDestroy {
  sideMenuActive: boolean;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.subscribeToSidebarState();
  }

  ngOnDestroy() {}

  private subscribeToSidebarState() {
    this.store.select((state: State) => state.sidebarActive)
      .pipe(untilDestroyed(this))
      .subscribe((active: boolean) => this.sideMenuActive = active);
  }
}
