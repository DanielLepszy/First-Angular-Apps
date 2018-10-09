import {BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private allAddedTasks: Array<string> = [];
  private doneTasks: Array<string> = [];

  private taskListObs = new BehaviorSubject<Array<string>>(this.allAddedTasks);
  private doneTasksObs = new BehaviorSubject<Array<string>>(this.doneTasks);
  constructor() {
    this.taskListObs.next(this.allAddedTasks);
  //  this.doneTasksObs.next(this.doneTasks);
   }
  seleceted(event: string): void {
    console.log(event);
  }
  getTask(event) {
    this.allAddedTasks.push(event);
    this.taskListObs.next(this.allAddedTasks);
  }
  getDoneTask(event) {
    this.doneTasks.push(event);
    this.doneTasksObs.next(this.doneTasks);
  }

}
