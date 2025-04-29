import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsFormComponent } from './components/students-form/students-form.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { Students } from './components/students-table/students-table.component'; // tu interfaz Students

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent {
  @ViewChild('studentsTable') studentsTable!: StudentsTableComponent;

  constructor(private dialog: MatDialog) {}

  openStudentForm(): void {
    const dialogRef = this.dialog.open(StudentsFormComponent, {
      width: '600px',
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: Students | undefined) => {
      if (result) {
        this.studentsTable.addStudent(result); // 👉 Le decimos al students-table que agregue el nuevo estudiante
      }
    });
  }
}
