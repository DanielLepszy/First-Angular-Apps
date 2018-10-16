import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TasksService } from '../Tasks/tasks.service';
import { Task } from '../Task/TaskObcject';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],

})
export class Child2Component implements OnChanges {


  allDoneTasks: Array<Task> = [];

  constructor(private taskService: TasksService) {
    // Odbior danych
    this.taskService.getDoneTasksObs().subscribe((done_tasks: Array<Task>) =>
      this.allDoneTasks = done_tasks);
  }

  clearAllTask() {
    this.allDoneTasks.length = 0;

  }
  sortDoneTask(array: Array<Task>) {

    console.log(array.sort((a, b) => {
      if (a.task_content.toLowerCase() > b.task_content.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    })
  );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.allDoneTasks);
  }
}
