import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from '../components/main-container/main-container.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import {SidebarModule} from 'ng-sidebar';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: LandingPageComponent
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NavbarComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(
      appRoutes,
    ),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
