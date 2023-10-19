import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {

  mensaje: string = 'Este es mi mensaje';
  identificador: string = 'mainDiv';

  numeros = signal<number[]>([]);
  longitud = computed(() => {
    return this.numeros().length
  });

  constructor() {
    setTimeout(() => {
      this.mensaje = 'El otro mensaje nuevo';
      this.identificador = 'otroDiv';
    }, 2000);
    setInterval(() => {
      this.numeros.mutate(value => value.push(12));
    }, 1000);

    effect(() => {
      // console.log(`Aumenta la long del array: ${this.longitud()}`);
    });
  }

  mostrarMensaje(): string {
    return 'Mensaje desde el método';
  }

}