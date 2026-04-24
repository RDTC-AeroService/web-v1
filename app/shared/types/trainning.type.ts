export interface Training {
  training_id: number;
  training_title: string;
  description?: string;
  trainer_name: string;
  start_date: Date;
  end_date: Date;
  location: string;
}