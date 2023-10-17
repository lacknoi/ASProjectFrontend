import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigupComponent } from './auth-components/sigup/sigup.component';
import { LoginComponent } from './auth-components/login/login.component';

const routes: Routes = [
  {path:"signup", component: SigupComponent}
  ,{path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
