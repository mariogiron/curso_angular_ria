import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  @Input('inicio') numero: number = 0;
  @Input() fin: number = 10;

  modificarContador(incremento: boolean) {
    this.numero = incremento ? this.numero + 1 : this.numero - 1;
  }

  cambioTexto($event: any) {
    console.log(($event.target as HTMLInputElement).value);
  }

}
