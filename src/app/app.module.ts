import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { FormsModule } from "@angular/forms";
import { ChildComponentComponent } from "./child-component/child-component.component";
import { Child2Component } from './child2/child2.component';
import { AddTasksComponentComponent } from "./add-tasks-component/add-tasks-component.component";


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChildComponentComponent,
    Child2Component,
    AddTasksComponentComponent,

  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
