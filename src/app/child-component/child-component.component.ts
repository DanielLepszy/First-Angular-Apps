import { Component, OnInit, EventEmitter } from "@angular/core";
import { Output, Input } from "@angular/core";
import { TasksService } from '../Tasks/tasks.service';
import { Task } from '../Task/TaskObcject';

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.css"],

})
export class ChildComponentComponent {

  myTask: Array<Task> = [];

  constructor(private taskService: TasksService) {
    // Odbior danych z serwisu
    this.taskService.getTaskListObs().subscribe((task: Array<Task>) => {
      this.myTask = task.slice();
    });
  }

  doneClick(done) {
    this.taskService.getDoneTask(done);
    this.myTask.splice(this.myTask.indexOf(done), 1);
  }
  deleteClick(del) {
    this.myTask.splice(this.myTask.indexOf(del), 1);

  }
}
