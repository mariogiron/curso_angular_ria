import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<p>Párrafo</p>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  manejarFinCuenta($event: string) {
    console.log($event);
  }

}
