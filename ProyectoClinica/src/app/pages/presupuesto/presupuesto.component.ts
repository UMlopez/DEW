import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {
  presupuestoForm = this.fb.group({
    name:[''],
    dni:[''],
    edad:[''],
    email:[''],
    celular:[''],
    especialidad:[''],
    compseguro:[''],
    detalles:['']
  });
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
