import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Students } from '../students-table/students-table.component'; // Asegúrate de ajustar esta ruta si cambia

@Component({
  selector: 'app-students-form',
  standalone: false,
  templateUrl: './students-form.component.html',
  styles: ``
})
export class StudentsFormComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Students | null
  ) {
    this.studentForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      estado: ['Activo', Validators.required],
    });

    // Si recibe datos (editar alumno), los carga en el formulario
    if (data) {
      this.studentForm.patchValue(data);
    }
  }

  save(): void {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;

      const newStudent: Students = {
        id: Math.floor(Math.random() * 10000), // Genera un ID aleatorio
        enrolledCourses: [],
        ...formValue
      };

      this.dialogRef.close(newStudent);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
