import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DummyDataComponent } from './dummy-data/dummy-data.component';
import { MsgSenderComponent } from './msg-sender/msg-sender.component';
import { MsgReceiverComponent } from './msg-receiver/msg-receiver.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormvalidationComponent,
    DummyDataComponent,
    MsgSenderComponent,
    MsgReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
