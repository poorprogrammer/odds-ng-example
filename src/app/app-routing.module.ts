import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './parent-to-child/using-behavior-subject/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'using-behavior-subject/dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
