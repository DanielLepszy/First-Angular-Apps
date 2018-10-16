import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Task/TaskObcject';

@Pipe({
  name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

  transform(value: Array<Task>, args?: any): Array<Task> {
    return value.sort((a, b) => {
      if (a.task_content.toLowerCase() > b.task_content.toLowerCase()) {
        return 1;
      } else { return -1; }
    }
      ,);
  }
}
