export interface Certification {
  certification_id: number;
  employee_id: number;
  training_id: number;
  certificate_name: string;
  issue_date: Date;
  expiry_date: Date;
  file_path: string;
}