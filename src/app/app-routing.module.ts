import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './admin/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './admin/pages/error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { EventsListAdminComponent } from './admin/pages/events-list-admin/events-list-admin.component';
import { AdminSettingsComponent } from './admin/pages/admin-settings/admin-settings.component';

import { RegisterComponent } from './authentification/register/register.component';
import { CalendarComponent } from './admin/pages/apps/calendar/calendar.component';
import { AllUsersComponent } from './admin/pages/all-users/all-users.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ListSponsoringComponent } from './admin/pages/list-sponsoring/list-sponsoring.component';
import { EventPageComponent } from './event-page/event-page.component';
import { LogistiqueComponent } from './admin/logistique/logistique.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserProfileSettingsComponent } from './user-profile-settings/user-profile-settings.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { AddEventAdminComponent } from './add-event-admin/add-event-admin.component';
import {AddDossierSponsoringComponent} from "./add-dossier-sponsoring/add-dossier-sponsoring.component";



export const routes: Routes = [
 {
    path: '',
    component: HomeComponent
  },

  {
    path: 'event/:id',
    component: EventPageComponent
  },
  {
    path: 'connexion',
    component: UserLoginComponent
  },
  {
    path: 'inscription',
    component: UserRegisterComponent
  },

  {
    path: 'mon-compte',
    component: UsersDashboardComponent,
    children: [
      {
        path: 'parametres',
        component: UserProfileSettingsComponent
      }

    ]
  },
  {
    path: 'profil/:id',
    component: UserProfilePageComponent
  },


  {
    path: 'compte',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [

      {
        path: 'apps',
        loadChildren: () => import('./admin/pages/apps/apps.module').then(m => m.AppsModule)
      },

      {
        path: 'admin/sponsoring',
        component:ListSponsoringComponent
      },


      {
        path: 'admin/ajouter/evenement',
        component:AddEventAdminComponent
      },

      {
        path: 'admin/ajouter/sponsoring',
        component:AddDossierSponsoringComponent
      },


      {
        path: 'admin/dashboard',
        component:DashboardComponent
      },

      {
        path: 'admin/utilisateurs',
        component:AllUsersComponent
      },

      {
        path: 'admin/parametres',
        component:AdminSettingsComponent
      },


      {
        path: 'admin/evenements',
        component:EventsListAdminComponent
      },

      {
        path: 'admin/logistique',
        component:LogistiqueComponent
      },


      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },

  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
