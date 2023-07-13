import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './admin/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './admin/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsListAdminComponent } from './admin/pages/events-list-admin/events-list-admin.component';
import { AdminSettingsComponent } from './admin/pages/admin-settings/admin-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from './services/UserService';

import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './admin/pages/all-users/all-users.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { ListSponsoringComponent } from './admin/pages/list-sponsoring/list-sponsoring.component';
import { EventPageComponent } from './event-page/event-page.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './admin/pages/all-users/filter.pipe';
import { LogistiqueComponent } from './admin/logistique/logistique.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserProfileSettingsComponent } from './user-profile-settings/user-profile-settings.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { AddEventAdminComponent } from './add-event-admin/add-event-admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddDossierSponsoringComponent } from './add-dossier-sponsoring/add-dossier-sponsoring.component';





@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent,
    EventsListAdminComponent,
    AdminSettingsComponent,
    AllUsersComponent,
    AllEventsComponent,
    ListSponsoringComponent,
    EventPageComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    FilterPipe,
    LogistiqueComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UsersDashboardComponent,
    UserProfileSettingsComponent,
    UserProfilePageComponent,
    AddEventAdminComponent,
    AddDossierSponsoringComponent,


  ],
  imports:
    [
      FormsModule,
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      LayoutModule,
      NgbModule,
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      NgxPaginationModule,
    ],
  providers: [UserService,
    AuthGuard,

    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
