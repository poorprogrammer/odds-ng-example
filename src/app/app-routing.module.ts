import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './parent-to-child/using-behavior-subject/dashboard/dashboard.component';
import { ParentComponent as ParentUsingInputComponent } from './parent-to-child/using-input/parent/parent.component';


const routes: Routes = [
  { path: 'cbc/using-behavior-subject/dashboard', component: DashboardComponent },
  { path: 'cbc/using-input', component: ParentUsingInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
