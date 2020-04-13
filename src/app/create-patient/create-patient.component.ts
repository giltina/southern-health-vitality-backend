import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatabaseService } from 'src/app/shared/database.service';
import { Patient } from 'src/app/model/patient.model';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patientForm: FormGroup;
  patient: Patient;

  constructor(private formBuilder: FormBuilder, private databaseService: DatabaseService) {
    this.createPatientForm();
   }

   createPatientForm(){
    this.patientForm = this.formBuilder.group({
      name: [''],
      dob: [''],
      address: [''],
      phone: [''],
      email: [''],
      gender: [''],
      status: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.databaseService.createPatient(this.patientForm.value);
    this.createPatientForm();
}

}
