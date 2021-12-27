import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path:"student_dashboard", loadChildren:()=>import('./student-dashboard/student-dashboard.component').then(m=>m.StudentDashboardComponent)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
