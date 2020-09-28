import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MenuComponent } from './menu/menu.component';
import { NewPatientRegistrationComponent } from './new-patient-registration/new-patient-registration.component';
import { ViewPatientDetailsComponent } from './view-patient-details/view-patient-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' },
  { path: 'Welcome', component: LoginFormComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Admin',  component: AdminPageComponent },
  { path: 'NewPatient', component: NewPatientRegistrationComponent },
  { path: 'PatientDetails', component: ViewPatientDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
