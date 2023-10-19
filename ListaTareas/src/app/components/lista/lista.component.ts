import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[] = [];

  borrarTarea(index: number) {
    this.tareas.splice(index, 1);
  }

  ngOnInit() {

  }

}
