import { Component, OnInit, EventEmitter } from "@angular/core";
import { Output, Input } from "@angular/core";
import { ServiceService } from '../Service/service.service';
import { TasksService } from '../Tasks/tasks.service';

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.css"],

})
export class ChildComponentComponent {

  myTask: Array<string> = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((task: Array<string>) => {
      this.myTask = task;
    });
  }

  doneClick(done) {
    this.taskService.getDoneTask(done);
    this.myTask.splice(this.myTask.indexOf(done), 1);
  }
  deleteClick(del) {
    this.myTask.splice(this.myTask.indexOf(del), 1);
    // console.log(this.myTask);
  }
}
