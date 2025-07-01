export type ConsultaStatus = "realizado" | "agendado" | "cancelado";

export interface Consulta {
  id: string;
  especialidade: string;
  medico: string;
  horario: string;
  data: string;
  local: string;
  status: ConsultaStatus;
  observacoes?: string;
  date_scheduling?: string;
  type?: string;
}

export interface Stats {
  realizadas: number;
  agendadas: number;
  canceladas: number;
  total: number;
}

export const enum ActiveTab {
  PERSONAL = 'personal',
  MEDICAL = 'medical',
  PREFERENCES = 'preferences',
}

export interface PersonalData {
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
  birthDate: string;
  cep: string;
  address: string;
  city: string;
  state: string;
}

export interface MedicalHistory {
  bloodType: string;
  emergencyContact: string;
  allergies: string;
  medications: string;
  chronicConditions: string;
  medicalObservations: string;
}

export interface PreferencesData {
  preferredUnit: string;
  preferredTime: string;
  appointmentReminder: string;
  emailNotifications: boolean;
  whatsappNotifications: boolean;
  preferenceObservations: string;
}

export const enum AppointmentStatus {
  REALIZADA = 'Realizada',
  AGENDADA = 'Agendada',
  CANCELADA = 'Cancelada',
}

export interface Appointment {
  id: string;
  specialty: string;
  doctorName: string;
  time: string;
  date: string;
  location: string;
  status: AppointmentStatus;
  observations?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  dateLabel?: string;
}