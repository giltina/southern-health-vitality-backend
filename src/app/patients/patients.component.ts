import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/database.service';
import { Patient } from 'src/app/model/patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {

    this.databaseService.getPatients().subscribe(data => {
      this.patients = data.map(e => {
        const id = e.payload.doc.id;
        // tslint:disable-next-line: no-shadowed-variable
        const data = e.payload.doc.data() as Patient;
        return { id, ...data };
      });
    });
  }

}
