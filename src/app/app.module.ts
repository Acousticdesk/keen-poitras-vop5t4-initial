import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AssignmentInfoComponent } from './assignment-info/assignment-info.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, AssignmentInfoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
