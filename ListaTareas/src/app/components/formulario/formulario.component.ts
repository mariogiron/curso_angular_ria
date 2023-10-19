import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../models/tarea.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nuevaTarea: Tarea = {};

  @Output() tareaCreada: EventEmitter<Tarea> = new EventEmitter();

  envioFormulario() {
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = {};
  }

}
