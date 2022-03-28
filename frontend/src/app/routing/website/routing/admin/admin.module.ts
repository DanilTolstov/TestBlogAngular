import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginPageComponent} from "../admin-auth/pages/login-page/login-page.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./routing/dashboard/dashboard.module')
          .then(module => module.DashboardModule)
      }
    ])
  ]
})
export class AdminModule { }
