import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MadUIModule } from 'madui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MadUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
