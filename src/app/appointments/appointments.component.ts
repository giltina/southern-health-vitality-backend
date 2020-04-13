import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/database.service';
import { Appointment } from 'src/app/model/appointment.model';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[];


  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.getAppointments().subscribe(data => {
      this.appointments = data.map(e => {
        const id = e.payload.doc.id;
        // tslint:disable-next-line: no-shadowed-variable
        const data = e.payload.doc.data() as Appointment;
        return { id, ...data };
      });
    });
  }

}
