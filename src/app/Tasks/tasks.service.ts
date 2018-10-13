import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private allAddedTasks: Array<string> = [];
  private doneTasks: Array<string> = [];

  private taskListObs = new BehaviorSubject<Array<string>>([]);
  private doneTasksObs = new BehaviorSubject<Array<string>>([]);

  constructor() {
    this.taskListObs.next(this.allAddedTasks);

  }
  // seleceted(event: string): void {
  //   console.log(event);
  // }
  getTask(event) {
    this.allAddedTasks.push(event);
    this.taskListObs.next(this.allAddedTasks);
    console.log('Przesłanie tasku do serwisu');
  }
  getDoneTask(event) {
    this.doneTasks.push(event);
    this.doneTasksObs.next(this.doneTasks);
    console.log('Przesłanie do Komponentu_2');
  }
  getTaskListObs(): Observable<Array<string>> {
    return this.taskListObs.asObservable();
  }
  getDoneTasksObs(): Observable<Array<string>> {
    return this.doneTasksObs.asObservable();
  }
}
