import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { DoCheck } from '@angular/core';
import { TasksService } from './Tasks/tasks.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [TasksService]
})

export class AppComponent implements OnInit {
  ngOnInit(): void {

  }

}
