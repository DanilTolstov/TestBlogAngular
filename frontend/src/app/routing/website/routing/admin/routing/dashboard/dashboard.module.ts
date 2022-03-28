import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: '',
        component: DashboardPageComponent
      }
    ])
  ]
})
export class DashboardModule { }
