import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../Tasks/tasks.service';
import { Task, Status } from '../Task/TaskObcject';

@Component({
  selector: 'app-add-tasks-component',
  templateUrl: './add-tasks-component.component.html',
  styleUrls: ['./add-tasks-component.component.css']
})

export class AddTasksComponentComponent {
  inputTask = "";
  task: Task;
  constructor(private taskService: TasksService) {

  }
  saveTask(event) {
    this.inputTask = event.target.value;
  }
  singleData() {
    if (this.inputTask !== "") {
      this.task = ({
        task_content: this.inputTask,
        date: new Date(),
        status: this.taskService.taskStatus.new
      });
      this.taskService.getTask(this.task);
      this.inputTask = "";
      // console.log(this.task.status);
    }


  }

}
