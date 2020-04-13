import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/database.service';
import { Appointment } from 'src/app/model/appointment.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Patient } from 'src/app/model/patient.model';
import { Practitioner } from 'src/app/model/practitioner.model';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointmentForm: FormGroup;
  appointment: Appointment;
  patients: Patient[];
  practitioners: Practitioner[];

  constructor(private formBuilder: FormBuilder, private databaseService: DatabaseService) {
    this.createAppointmentForm();
   }

  ngOnInit(): void {
    this.patient();
    this.practitioner();
  }

  createAppointmentForm(){
    this.appointmentForm = this.formBuilder.group({
      title: [''],
      date: [''],
      time: [''],
      duration: [''],
      patient: [''],
      status: [''],
      fees: [''],
      practitioner: [''],
      notes: ['']
    });
  }

  patient(){

    this.databaseService.getPatients().subscribe(data => {
      this.patients = data.map(e => {
        const id = e.payload.doc.id;
        // tslint:disable-next-line: no-shadowed-variable
        const data = e.payload.doc.data() as Patient;
        return { id, ...data };
      });
    });

  }

  practitioner(){

    this.databaseService.getPractitioners().subscribe(data => {
      this.practitioners = data.map(e => {
        const id = e.payload.doc.id;
        // tslint:disable-next-line: no-shadowed-variable
        const data = e.payload.doc.data() as Practitioner;
        return { id, ...data };
      });
    });
  }

  onSubmit() {
    this.databaseService.createAppointment(this.appointmentForm.value);
    this.createAppointmentForm();
}


}
