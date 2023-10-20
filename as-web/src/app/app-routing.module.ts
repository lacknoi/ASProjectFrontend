import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigupComponent } from './auth-components/sigup/sigup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCriteriaComponent } from './debt-components/debt/add-criteria/add-criteria.component';
import { MobileListComponent } from './profile-component/mobile/mobile-list/mobile-list.component';
import { CriteriaListComponent } from './debt-components/debt/criteria-list/criteria-list.component';
import { CriteriaDetailComponent } from './debt-components/debt/criteria-detail/criteria-detail.component';

const routes: Routes = [
  {path:"signup", component: SigupComponent}
  ,{path:"login", component: LoginComponent}
  ,{path:"dashboard", component: DashboardComponent}
  ,{path:"create-criteria", component: AddCriteriaComponent}
  ,{path:"mobile-list", component: MobileListComponent}
  ,{path:"criteria-list", component: CriteriaListComponent}
  ,{path:"criteria/:criteriaId", component: CriteriaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
