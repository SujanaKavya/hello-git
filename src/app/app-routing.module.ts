import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentTableListComponent } from './student-table-list/student-table-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-student-details', pathMatch: 'full' },
  
  { path: 'view-student-details', component: StudentTableListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
