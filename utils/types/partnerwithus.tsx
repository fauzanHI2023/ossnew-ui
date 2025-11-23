// 🧩 Tipe Project untuk data API kamu
export interface Project {
  id: number;
  title: string;
  parent_program: string;
  program_name?: string;
  project_description?: string;
  project_goal?: string;
  project_scope?: string;
  amount: number | string; // kadang bisa string dari API
  currency?: string;
  quantity?: number;
  files?: any[]; // bisa diganti lebih spesifik kalau tahu struktur file-nya
}

export interface ProjectResponse {
  data: Project[];
}
