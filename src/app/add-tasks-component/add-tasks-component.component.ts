import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../Tasks/tasks.service';

@Component({
  selector: 'app-add-tasks-component',
  templateUrl: './add-tasks-component.component.html',
  styleUrls: ['./add-tasks-component.component.css']
})
export class AddTasksComponentComponent {
  task = "";

  constructor(private taskService: TasksService) {

  }
  saveTask(event) {
    this.task = event.target.value;
  }
  singleData() {
    if (this.task !== "") {
      this.taskService.getTask(this.task);
      this.task = "";
      console.log('Serwis odbiera tasks');
    }


  }

}
