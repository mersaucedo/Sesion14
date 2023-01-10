import { NgForm } from '@angular/forms';

import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
interface ContactForm
  {
    "estado": string,
    "name": string,
    "dni":number
    
  }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, OnDestroy, OnInit {
  model = {
    name: '',
    dni: '',
    estado: '',
  };

  title = 'catorce';
  nombre1: string = "";
  dni1: string = "";  
  estado1: string = "";
  validacion: boolean = false;
 


  onClick() {
    
    if(this.nombre1!=""&&this.dni1!=""&&this.estado1!=""){
      console.log('clicked');
    this.model.name=this.nombre1;
    this.model.estado=this.estado1;
    this.model.dni=this.dni1;
    this.validacion=true;
    }
  }
    
    
  
  @Input() color!: string;
  @Input() label!: string;

 
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ->', changes);
  }

 
  ngOnInit(): void {

  }

  onSubmit(form: NgForm): void {
    console.log('Form values', form);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy ->');
  }
}
