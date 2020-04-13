import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Patient } from 'src/app/model/patient.model';
import { Practitioner } from 'src/app/model/practitioner.model';
import { Appointment } from 'src/app/model/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }

  // Patient Services

  getPatients() {
    return this.firestore.collection('patients').snapshotChanges();
}

createPatient(patient: Patient){
  return this.firestore.collection('patients').add(patient);
}

updatePatient(patient: Patient){
  delete patient.id;
  this.firestore.doc('patients/' + patient.id).update(patient);
}

deletePatient(patientId: string){
  this.firestore.doc('patients/' + patientId).delete();
}

  // Practitioner Services

  getPractitioners() {
    return this.firestore.collection('practitioners').snapshotChanges();
}

createPractitioner(practitioner: Practitioner){
  return this.firestore.collection('practitioners').add(practitioner);
}

updatePractitioner(practitioner: Practitioner){
  delete practitioner.id;
  this.firestore.doc('practitioners/' + practitioner.id).update(practitioner);
}

deletePractitioner(practitionerId: string){
  this.firestore.doc('practitioners/' + practitionerId).delete();
}

  // Appointment Services

  getAppointments() {
    return this.firestore.collection('appointments').snapshotChanges();
}

createAppointment(appointment: Appointment){
  return this.firestore.collection('appointments').add(appointment);
}

updateAppointment(appointment: Appointment){
  delete appointment.id;
  this.firestore.doc('appointments/' + appointment.id).update(appointment);
}

deleteAppointment(appointmentId: string){
  this.firestore.doc('appointments/' + appointmentId).delete();
}

}
