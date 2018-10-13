export interface Task {
  task_content: string;
  date: Date;
  status: string;
  endDate?: Date;

}
export class Status {
  public new: string;
  public done: string;
  public canceled: string;
  constructor() {
    this.new = 'NEW';
    this.done = 'DONE';
    this.canceled = "CANCELED";
  }


}
const st = new Status();
const abc = st.done;
