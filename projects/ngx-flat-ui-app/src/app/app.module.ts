import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxFlatUIModule } from 'ngx-flat-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFlatUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
