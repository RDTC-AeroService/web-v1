export interface Payroll {
  payroll_id: number;
  employee_id: number;
  month: number;
  year: number;
  base_salary: number;
  overtime_amount: number;
  bonus_amount: number;
  deduction_amount: number;
  tax_amount: number;
  net_salary: number;
  generated_date: Date;
}