export type ApplicationStatus = 'Enviado' | 'Entrevista' | 'Oferta' | 'Rechazado';

export interface JobApplication {
  id?: string;             // Opcional (?) porque al crearla aun no tiene ID de Firebase
  company: string;         // Requisito: String
  position: string;        // Requisito: String
  salary: number;          // Requisito: Number
  status: ApplicationStatus; // Requisito: Enum/Union
  createdAt: number;       // Para ordenar por fecha (guardaremos milisegundos)
}