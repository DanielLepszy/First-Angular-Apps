import {Observable, Subject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  sumClicks = 0;
  private mySum_Clicks = new Subject<number>();

  constructor() { }
  addClicks(): void {
    this.sumClicks += 1;
    this.mySum_Clicks.next(this.sumClicks);
    // console.log("Suma : " + this.sumClicks);
  }
  getNewData():Observable<number> {
    return this.mySum_Clicks.asObservable();
  }

}
