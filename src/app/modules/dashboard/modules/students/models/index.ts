// index.ts

export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  enrolledCourses: number[]; // IDs de cursos donde está inscrito
  status: 'Active' | 'Inactive';
}

export interface Course {
  id: number;
  name: string;
  description: string;
  duration: string; // Ejemplo: "3 meses", "40 horas"
  instructorId: number; // Relación con Instructor
  startDate: Date;
  endDate: Date;
  status: 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled';
}

export interface Instructor {
  id: number;
  name: string;
  email: string;
  phone: string;
  bio: string;
  coursesTaught: number[]; // IDs de cursos que dicta
  available: boolean;
}
