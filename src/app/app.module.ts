import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DummyDataComponent } from './dummy-data/dummy-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FormvalidationComponent,
    DummyDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
