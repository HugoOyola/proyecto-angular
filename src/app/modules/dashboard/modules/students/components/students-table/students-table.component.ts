import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface Students {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  enrolledCourses: number[];
  estado: string;
}

export const ELEMENT_DATA: Students[] = [
  {
    id: 1,
    nombre: 'Juan',
    apellidos: 'Pérez García',
    email: 'juan.perez@example.com',
    telefono: '987654321',
    direccion: 'Av. Siempre Viva 123',
    enrolledCourses: [1, 2],
    estado: 'Activo'
  },
  {
    id: 2,
    nombre: 'María',
    apellidos: 'López Sánchez',
    email: 'maria.lopez@example.com',
    telefono: '912345678',
    direccion: 'Calle Falsa 456',
    enrolledCourses: [2, 3],
    estado: 'Activo'
  },
  {
    id: 3,
    nombre: 'Pedro',
    apellidos: 'Castillo Ramos',
    email: 'pedro.castillo@example.com',
    telefono: '987123654',
    direccion: 'Jr. Las Flores 789',
    enrolledCourses: [1],
    estado: 'Inactivo'
  },
  {
    id: 4,
    nombre: 'Ana',
    apellidos: 'Torres Vidal',
    email: 'ana.torres@example.com',
    telefono: '921654987',
    direccion: 'Av. San Martín 321',
    enrolledCourses: [2, 4],
    estado: 'Activo'
  },
  {
    id: 5,
    nombre: 'Luis',
    apellidos: 'Fernández Huamán',
    email: 'luis.fernandez@example.com',
    telefono: '915987321',
    direccion: 'Calle Lima 789',
    enrolledCourses: [3],
    estado: 'Activo'
  },
  {
    id: 6,
    nombre: 'Claudia',
    apellidos: 'Ramírez Palacios',
    email: 'claudia.ramirez@example.com',
    telefono: '911223344',
    direccion: 'Av. Los Álamos 102',
    enrolledCourses: [1, 4],
    estado: 'Inactivo'
  },
  {
    id: 7,
    nombre: 'Carlos',
    apellidos: 'Vargas Montes',
    email: 'carlos.vargas@example.com',
    telefono: '987654987',
    direccion: 'Pasaje Independencia 50',
    enrolledCourses: [2],
    estado: 'Activo'
  },
  {
    id: 8,
    nombre: 'Lucía',
    apellidos: 'Mendoza Paredes',
    email: 'lucia.mendoza@example.com',
    telefono: '910111213',
    direccion: 'Jr. Comercio 890',
    enrolledCourses: [3, 4],
    estado: 'Activo'
  },
  {
    id: 9,
    nombre: 'Andrés',
    apellidos: 'Reyes Campos',
    email: 'andres.reyes@example.com',
    telefono: '921122334',
    direccion: 'Av. El Sol 654',
    enrolledCourses: [1],
    estado: 'Inactivo'
  },
  {
    id: 10,
    nombre: 'Paula',
    apellidos: 'Gómez Salas',
    email: 'paula.gomez@example.com',
    telefono: '912334455',
    direccion: 'Calle Primavera 321',
    enrolledCourses: [4],
    estado: 'Activo'
  },
  {
    id: 11,
    nombre: 'Fernando',
    apellidos: 'Muñoz Quispe',
    email: 'fernando.munoz@example.com',
    telefono: '987112233',
    direccion: 'Pasaje Los Pinos 12',
    enrolledCourses: [1, 2],
    estado: 'Activo'
  },
  {
    id: 12,
    nombre: 'Sandra',
    apellidos: 'Ortega Salazar',
    email: 'sandra.ortega@example.com',
    telefono: '913344556',
    direccion: 'Jr. Las Margaritas 145',
    enrolledCourses: [2, 3],
    estado: 'Inactivo'
  },
  {
    id: 13,
    nombre: 'Ricardo',
    apellidos: 'Salinas León',
    email: 'ricardo.salinas@example.com',
    telefono: '914455667',
    direccion: 'Av. Los Héroes 789',
    enrolledCourses: [3],
    estado: 'Activo'
  },
  {
    id: 14,
    nombre: 'Verónica',
    apellidos: 'Campos Rojas',
    email: 'veronica.campos@example.com',
    telefono: '915566778',
    direccion: 'Calle Las Violetas 45',
    enrolledCourses: [1, 4],
    estado: 'Activo'
  },
  {
    id: 15,
    nombre: 'Eduardo',
    apellidos: 'Gutiérrez Peña',
    email: 'eduardo.gutierrez@example.com',
    telefono: '916677889',
    direccion: 'Jr. Universitaria 300',
    enrolledCourses: [2],
    estado: 'Inactivo'
  },
  {
    id: 16,
    nombre: 'Gabriela',
    apellidos: 'Ríos Velarde',
    email: 'gabriela.rios@example.com',
    telefono: '917788990',
    direccion: 'Av. Industrial 999',
    enrolledCourses: [1, 3],
    estado: 'Activo'
  },
  {
    id: 17,
    nombre: 'Rodrigo',
    apellidos: 'Pacheco Meza',
    email: 'rodrigo.pacheco@example.com',
    telefono: '918899001',
    direccion: 'Calle Unión 205',
    enrolledCourses: [4],
    estado: 'Activo'
  },
  {
    id: 18,
    nombre: 'Alejandra',
    apellidos: 'Chávez Olivares',
    email: 'alejandra.chavez@example.com',
    telefono: '919900112',
    direccion: 'Av. América 120',
    enrolledCourses: [3],
    estado: 'Inactivo'
  },
  {
    id: 19,
    nombre: 'Miguel',
    apellidos: 'Herrera Soto',
    email: 'miguel.herrera@example.com',
    telefono: '920011223',
    direccion: 'Pasaje Libertad 23',
    enrolledCourses: [2],
    estado: 'Activo'
  },
  {
    id: 20,
    nombre: 'Camila',
    apellidos: 'Sánchez Moreno',
    email: 'camila.sanchez@example.com',
    telefono: '921122334',
    direccion: 'Jr. Las Rosas 404',
    enrolledCourses: [1, 4],
    estado: 'Activo'
  },
  {
    id: 21,
    nombre: 'Diego',
    apellidos: 'Molina Aparicio',
    email: 'diego.molina@example.com',
    telefono: '922233445',
    direccion: 'Av. Central 111',
    enrolledCourses: [2, 3],
    estado: 'Activo'
  },
  {
    id: 22,
    nombre: 'Patricia',
    apellidos: 'Navarro Bazán',
    email: 'patricia.navarro@example.com',
    telefono: '923344556',
    direccion: 'Calle Bolívar 550',
    enrolledCourses: [3, 4],
    estado: 'Inactivo'
  },
  {
    id: 23,
    nombre: 'Jorge',
    apellidos: 'Aguilar Carranza',
    email: 'jorge.aguilar@example.com',
    telefono: '924455667',
    direccion: 'Jr. Loreto 202',
    enrolledCourses: [1],
    estado: 'Activo'
  },
  {
    id: 24,
    nombre: 'Diana',
    apellidos: 'Valverde Amaya',
    email: 'diana.valverde@example.com',
    telefono: '925566778',
    direccion: 'Av. Perú 888',
    enrolledCourses: [2],
    estado: 'Activo'
  },
  {
    id: 25,
    nombre: 'Oscar',
    apellidos: 'Ramírez Córdoba',
    email: 'oscar.ramirez@example.com',
    telefono: '926677889',
    direccion: 'Calle Las Palmeras 12',
    enrolledCourses: [1, 3, 4],
    estado: 'Activo'
  }
];

@Component({
  selector: 'app-students-table',
  standalone: false,
  templateUrl: './students-table.component.html',
  styles: ``,
})
export class StudentsTableComponent {
  displayedColumns: string[] = ['id', 'nombre', 'email', 'telefono', 'estado'];
  dataSource = new MatTableDataSource<Students>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
