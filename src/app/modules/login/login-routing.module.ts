import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { LoginMainComponent } from './components/login-main/login-main.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    children:[
      {
        path:"",
        component:LoginMainComponent
      },
      {
        path:"forgot-password",
        component:ForgotComponent
      },
      {
        path:"reset-password",
        component:ResetComponent
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
