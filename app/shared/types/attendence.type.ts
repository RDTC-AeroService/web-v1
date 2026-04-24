export interface Attendance {
  attendance_id: number;
  employee_id: number;
  date: Date;
  clock_in: string;  
  clock_out: string;
  status: string;
}