import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-tasks-component',
  templateUrl: './add-tasks-component.component.html',
  styleUrls: ['./add-tasks-component.component.css']
})
export class AddTasksComponentComponent implements OnInit {
  task = "";

  @Output()
  singleTask = new EventEmitter<string>();

  constructor() { }
  saveTask(event) {
    this.task = event.target.value;
  }
  signleData() {
    if (this.task !== "") {
      this.singleTask.emit(this.task);
      this.task = "";
    }


  }


  ngOnInit() {
  }

}
