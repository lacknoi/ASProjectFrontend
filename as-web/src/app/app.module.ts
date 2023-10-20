import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigupComponent } from './auth-components/sigup/sigup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMessageComponent } from './debt-components/sms/add-message/add-message.component';
import { AddCriteriaComponent } from './debt-components/debt/add-criteria/add-criteria.component';
import { MobileListComponent } from './profile-component/mobile/mobile-list/mobile-list.component';
import { CriteriaListComponent } from './debt-components/debt/criteria-list/criteria-list.component';
import { CriteriaDetailComponent } from './debt-components/debt/criteria-detail/criteria-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SigupComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    AddMessageComponent,
    AddCriteriaComponent,
    MobileListComponent,
    CriteriaListComponent,
    CriteriaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
