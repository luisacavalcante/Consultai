import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpMedicalComponent } from './sign-up-medical/sign-up-medical.component';
import { PatientComponent } from './patient/patient.component';
import { SignUpPatientComponent } from './sign-up-patient/sign-up-patient.component';
import { MedicalComponent } from './medical/medical.component';
import { AnamnesisCallComponent } from './anamnesis-call/anamnesis-call.component';
import { FeedbackComponent } from './anamnesisCall/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpMedicalComponent,
    PatientComponent,
    SignUpPatientComponent,
    MedicalComponent,
    AnamnesisCallComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
