export interface AppointmentStatus {
  id: number;
  status: string; // "new"
  scenario: string; // "appointment"
  is_active: boolean;
}

export interface Appointment {
  id: number;
  proposal_id: number;
  date: string;
  end_date: string;
  tempat: string;
  notes: string;
  program_name: string | null;
  created_at: string;
  email: string | null;
  name: string | null;
  jabatan: string | null;
  marketer: string | null;
  user_id: string;
  status: AppointmentStatus; // ← nested object
}
