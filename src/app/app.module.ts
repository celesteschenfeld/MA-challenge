import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonalFormComponent } from './forms/stepper-form/personal-form.component';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
//services
import { VehiculoService } from './services/vehiculo.service'


@NgModule({
  declarations: [
    AppComponent,
    PersonalFormComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    VehiculoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
