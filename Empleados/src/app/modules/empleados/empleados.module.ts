import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component';

@NgModule({
  declarations: [
    ListaEmpleadosComponent,
    NuevoEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmpleadosModule { }
