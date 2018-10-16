import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { FormsModule } from "@angular/forms";
import { ChildComponentComponent } from "./child-component/child-component.component";
import { Child2Component } from './child2/child2.component';
import { AddTasksComponentComponent } from "./add-tasks-component/add-tasks-component.component";
import { CheckedDirective } from './Shared/checked.directive';
import { DoneTaskDatesDirective } from './Shared/done-task-dates.directive';
import { SortDataPipe } from './Shared/sort-data.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChildComponentComponent,
    Child2Component,
    AddTasksComponentComponent,
    CheckedDirective,
    DoneTaskDatesDirective,
    SortDataPipe,

  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
