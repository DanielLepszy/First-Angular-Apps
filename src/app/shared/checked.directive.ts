import { Renderer2, ElementRef, Directive, OnInit } from '@angular/core';


@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {


  constructor(private el:ElementRef, private change:Renderer2) { }
  ngOnInit(): void {
    const li_doneTask = this.el.nativeElement;
    this.change.setStyle(li_doneTask,"background","powderblue");
    this.change.setStyle(li_doneTask,"border-radius","10%");
    this.change.setStyle(li_doneTask,"list-style-image",'url(/assets/checked.png');
    this.change.setStyle(li_doneTask,"text-align","center");
  }
}
