import { Directive, Input } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appDoneTaskDates]'
})
export class DoneTaskDatesDirective {

  @Input()
  private date: Date;

  constructor() { }

  @HostListener('mouseenter')
  mouseenter() {
    console.log(this.date);
  }
  @HostListener('mouseleave')
  mouseleave() {
    console.log('NIEdziała');
  }
}
