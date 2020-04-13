import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/database.service';
import { Practitioner } from 'src/app/model/practitioner.model';

@Component({
  selector: 'app-practitioners',
  templateUrl: './practitioners.component.html',
  styleUrls: ['./practitioners.component.css']
})
export class PractitionersComponent implements OnInit {
  practitioners: Practitioner[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {

    this.databaseService.getPractitioners().subscribe(data => {
      this.practitioners = data.map(e => {
        const id = e.payload.doc.id;
        // tslint:disable-next-line: no-shadowed-variable
        const data = e.payload.doc.data() as Practitioner;
        return { id, ...data };
      });
    });
  }

}
