import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "./component/login/login.component";
import {SignupComponent} from "./component/signup/signup.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {FacebookPageComponent} from "./component/platform/facebook-page/facebook-page.component";
import {LinePageComponent} from "./component/platform/line-page/line-page.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children:[
      {
        path: 'facebook-page', component: FacebookPageComponent
      },
      {
        path: 'line-page', component: LinePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
