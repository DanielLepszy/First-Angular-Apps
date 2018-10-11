import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { TasksService } from '../Tasks/tasks.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],

})
export class Child2Component implements OnInit {

  allDoneTasks: Array<string> = [];
  amountOfClick2 = 0;

  constructor(private taskService: TasksService) { }

  sumClick() {
    this.amountOfClick2 += 1;
  }
  clearAllTask() {
    console.log(this.allDoneTasks);
    this.allDoneTasks.length=0;

  }
  ngOnInit() {
  }

}
