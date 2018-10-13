import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task, Status } from '../Task/TaskObcject';


const status_object = new Status();

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskStatus:Status = status_object;
  private allAddedTasks: Array<Task> = [];
  private doneTasks: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private doneTasksObs = new BehaviorSubject<Array<Task>>([]);
  constructor() {
    this.taskListObs.next(this.allAddedTasks);
  }
// Przesladnie tasku do serwisu
  getTask(event:Task) {
    this.allAddedTasks.push(event);
    event.status= this.taskStatus.new;
    this.taskListObs.next(this.allAddedTasks);
    // console.log('Przesłanie tasku do serwisu');
  }
  getDoneTask(event) {
    this.doneTasks.push(event);
    this.doneTasksObs.next(this.doneTasks);
    console.log('Przesłanie do Komponentu_2');
  }
  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }
  getDoneTasksObs(): Observable<Array<Task>> {
    return this.doneTasksObs.asObservable();
  }
}

