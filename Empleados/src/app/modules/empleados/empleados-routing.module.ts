import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component';

const routes: Routes = [
  { path: '', component: ListaEmpleadosComponent },
  { path: 'nuevo', component: NuevoEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }

// localhost:4200/empleados