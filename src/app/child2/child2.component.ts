import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TasksService } from '../Tasks/tasks.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],

})
export class Child2Component implements OnChanges {


  allDoneTasks: Array<string> = [];

  constructor(private taskService: TasksService) {
    this.taskService.getDoneTasksObs().subscribe((done_tasks: Array<string>) =>
      this.allDoneTasks = done_tasks);
    console.log('Odbiór danych przez komponent2');
  }

  clearAllTask() {
    this.allDoneTasks.length = 0;

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.allDoneTasks);
  }
}
