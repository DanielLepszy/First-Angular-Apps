import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { DoCheck } from '@angular/core';
import { ServiceService } from './Service/service.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ServiceService]
})
export class AppComponent implements OnInit, DoCheck {
  allClicksOnApp: number;
  allAddedTasks: Array<string> = [];
  doneTasks: Array<string> = [];

  constructor(private serwis: ServiceService) { }
  seleceted(event: string): void {
    console.log(event);
  }
  getTask(event) {
    this.allAddedTasks.push(event);
  }
  getDoneTask(event) {
    this.doneTasks.push(event);
    console.log(this.doneTasks);
  }

  ngOnInit(): void {
    this.serwis.getNewData().subscribe(new_data => this.allClicksOnApp = new_data);
  }
  ngDoCheck(): void {
    // console.log('tak');
  }

}
