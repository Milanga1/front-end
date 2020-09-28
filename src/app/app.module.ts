import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { MenuComponent } from './menu/menu.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NewPatientRegistrationComponent } from './new-patient-registration/new-patient-registration.component';
import { ViewPatientDetailsComponent } from './view-patient-details/view-patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MenuComponent,
    AdminPageComponent,
    NewPatientRegistrationComponent,
    ViewPatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
