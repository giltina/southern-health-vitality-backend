import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { PatientsComponent } from './patients/patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { PractitionersComponent } from './practitioners/practitioners.component';
import { CreatePractitionerComponent } from './create-practitioner/create-practitioner.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DatabaseService } from 'src/app/shared/database.service';
import {  FormsModule,  ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    CreatePatientComponent,
    AppointmentsComponent,
    CreateAppointmentComponent,
    PractitionersComponent,
    CreatePractitionerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
