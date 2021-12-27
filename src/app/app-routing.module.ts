import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [
 {
   path:"student_dashboard", loadChildren:()=>import('./student-dashboard/student-dashboard.component').then(m=>m.StudentDashboardComponent)
 },
 {
   path:"assignment", component:AssignmentComponent
 },
 {
   path:"dashboard", component:StudentDashboardComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
