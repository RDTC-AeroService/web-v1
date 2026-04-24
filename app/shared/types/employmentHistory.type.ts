export interface EmploymentHistory {
  history_id: number;
  employee_id: number;
  position_id: number;
  start_date: Date;
  end_date?: Date;
  salary: number;
}