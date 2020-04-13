import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients/patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { PractitionersComponent } from './practitioners/practitioners.component';
import { CreatePractitionerComponent } from './create-practitioner/create-practitioner.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'add-patient', component: CreatePatientComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'add-appointment', component: CreateAppointmentComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'add-practitioner', component: CreatePractitionerComponent },
  { path: 'practitioners', component: PractitionersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
