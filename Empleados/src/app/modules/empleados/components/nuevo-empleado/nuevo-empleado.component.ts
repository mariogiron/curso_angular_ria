import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/core/services/empleados.service';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empleadosService: EmpleadosService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      nombre: [],
      apellidos: [],
      email: [],
      telefono: [],
      departamento: [],
      salario: []
    });
  }

  async onSubmit() {
    const response = await this.empleadosService.create(this.formulario.value);
    this.router.navigate(['/empleados']);
  }

}
