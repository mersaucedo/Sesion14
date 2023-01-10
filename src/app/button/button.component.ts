import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-button',
  //template: ` <button [ngStyle]="{'background-color': color }">{{label}}</button>`,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnChanges, OnDestroy, OnInit {
  @Input()estado!:string;
 @Input()color!:string;
 @Input()label!:string;
 @Input()name!:string;
 @Input()dni!:number;
 @Input()model!:object;
 @Input()validacion!:boolean;


  constructor() { }
 
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log('Changes ->', changes);   
  }

 
  ngOnInit(): void {
  }

  onSubmit(form:NgForm):void{
    console.log('Form values', form);
  }
 
  ngOnDestroy(): void {
    console.log('OnDestroy ->');
  }
   

}
