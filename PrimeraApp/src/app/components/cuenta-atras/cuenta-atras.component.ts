import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cuenta-atras',
  templateUrl: './cuenta-atras.component.html',
  styleUrls: ['./cuenta-atras.component.css']
})
export class CuentaAtrasComponent {

  @Input() inicio: number = 10;

  @Output() finCuenta: EventEmitter<string> = new EventEmitter();

  constructor() {
    const interval = setInterval(() => {
      this.inicio--;
      if (this.inicio === 0) {
        clearInterval(interval);
        this.finCuenta.emit('Termina de contar');
      }
    }, 1000);
  }

}
