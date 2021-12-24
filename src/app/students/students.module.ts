import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';


@NgModule({
  declarations: [
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
