import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],

})
export class Child2Component implements OnInit {
  @Input()
  allDoneTasks: Array<string> = [];
  amountOfClick2 = 0;

  constructor(private service: ServiceService) { }

  sumClick() {
    this.amountOfClick2 += 1;
    this.service.addClicks();

  }
  clearAllTask() {
    console.log(this.allDoneTasks);
    this.allDoneTasks.length=0;

  }
  ngOnInit() {
  }

}
