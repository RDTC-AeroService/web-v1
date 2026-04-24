export interface Overtime {
  overtime_id: number;
  employee_id: number;
  date: Date;
  hours: number;
  rate: number;
  approval_status: string;
}