import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatabaseService } from 'src/app/shared/database.service';
import { Practitioner } from 'src/app/model/practitioner.model';

@Component({
  selector: 'app-create-practitioner',
  templateUrl: './create-practitioner.component.html',
  styleUrls: ['./create-practitioner.component.css']
})
export class CreatePractitionerComponent implements OnInit {

  practitionerForm: FormGroup;
  practitioner: Practitioner;

  constructor(private formBuilder: FormBuilder, private databaseService: DatabaseService) { 
    this.createPractitionerForm();
  }

  ngOnInit(): void {
  }

  createPractitionerForm(){
    this.practitionerForm = this.formBuilder.group({
      name: [''],
      phone: [''],
      email: [''],
      gender: [''],
      post: ['']
    });
  }

  onSubmit() {
    this.databaseService.createPractitioner(this.practitionerForm.value);
    this.createPractitionerForm();
}

}
