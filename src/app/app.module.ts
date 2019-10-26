import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from '../components/main-container/main-container.component';
import {StoreModule} from '@ngrx/store';
import {effects, reducers} from '../store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import {SidebarModule} from 'ng-sidebar';
import { OrganisationRegistrationComponent } from '../components/organisation-registration/organisation-registration.component';
import {FormsModule} from '@angular/forms';
import { UserRegistrationComponent } from '../components/user-registration/user-registration.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '../store/effects/auth.effects';
import {AuthService} from '../services/auth.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: LandingPageComponent
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: 'registration',
    component: RegistrationComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NavbarComponent,
    LandingPageComponent,
    OrganisationRegistrationComponent,
    UserRegistrationComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(
      appRoutes,
    ),
    SidebarModule.forRoot(),
    FormsModule,
    EffectsModule.forRoot(effects),
    HttpClientModule
  ],
  providers: [AuthEffects, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
