import { Component } from '@angular/core';
import { Empleado } from 'src/app/core/models/empleado';
import { EmpleadosService } from 'src/app/core/services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  empleados: Empleado[] = [];

  constructor(private empleadosService: EmpleadosService) { }

  async ngOnInit() {
    // this.empleadosService.getAll()
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));

    try {
      const response = await this.empleadosService.getAll();
      // this.empleados = response.sort((empA, empB) => empA.nombre < empB.nombre ? -1 : 1);
      console.log(response);
      this.empleados = response.filter(empleado => empleado.salario > 50000);
    } catch (error) {
      console.log(error);
    }
  }

}
