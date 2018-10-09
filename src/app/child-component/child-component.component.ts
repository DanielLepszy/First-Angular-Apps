import { Component, OnInit, EventEmitter } from "@angular/core";
import { Output, Input } from "@angular/core";
import { ServiceService } from '../Service/service.service';

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.css"],

})
export class ChildComponentComponent {
  @Input()
  myTask: Array<string> = [];

  @Output()
  doneTasks = new EventEmitter<string>();

  constructor(private service: ServiceService) { }

  doneClick(done) {
    this.doneTasks.emit(done);
    this.myTask.splice(this.myTask.indexOf(done) ,1);

  }
  deleteClick(del) {
    this.myTask.splice(this.myTask.indexOf(del) ,1);
    // console.log(this.myTask);
  }
}
