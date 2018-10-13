export interface Task {
  task_content: string;
  date: Date;
  status: string;
  endDate?: Date;

}
export class Status {
  New = 'NEW';
  Done = 'DONE';
  Canceled = "CANCELED";

}
