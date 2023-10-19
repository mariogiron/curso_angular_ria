import { Component } from '@angular/core';

interface Contacto {
  nombre?: string;
  apellidos?: string;
  edad?: number;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  mensaje: string = '';

  contacto: Contacto = {};

}
