import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsTableComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule
  ],
  exports: [
    StudentsComponent
  ],
})
export class StudentModule { }
