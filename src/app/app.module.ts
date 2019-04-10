import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent-to-child/using-input/parent/parent.component';
import { ChildComponent } from './parent-to-child/using-input/child/child.component';
import { DashboardComponent } from './parent-to-child/using-behavior-subject/dashboard/dashboard.component';
import { ProgressBarComponent } from './parent-to-child/using-behavior-subject/progress-bar/progress-bar.component';
import { MeterComponent } from './parent-to-child/using-behavior-subject/meter/meter.component';
import { InputComponent } from './parent-to-child/using-behavior-subject/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DashboardComponent,
    ProgressBarComponent,
    MeterComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
