import { Pipe, PipeTransform } from '@angular/core';
import { Students } from '../students-table/students-table.component'; // Ajusta si la ruta cambia

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(student: Students): string {
    return `${student.nombre} ${student.apellidos}`;
  }
}
