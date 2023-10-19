import { Component } from '@angular/core';
import { Tarea } from './models/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tareas: Tarea[] = [];

  manejarTareaCreada($event: Tarea) {
    this.tareas.push($event);
    console.log(this.tareas);
  }

}
