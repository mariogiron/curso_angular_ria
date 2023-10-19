import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // https://codeshare.io/OdE4lj

  @ViewChild('parrafoFinal') parrafoFinal!: ElementRef;

  propiedades: any = { color: 'tomato' };
  active: boolean = true;

  ngOnInit() {
    setInterval(() => {
      this.active = !this.active;
    }, 3000);
  }

  ngAfterViewInit() {
    this.parrafoFinal.nativeElement.style.color = 'yellow';
  }

  changeFontSize($event: Event) {
    this.propiedades.fontSize = ($event.target as HTMLInputElement).value + 'px';
  }

  changeBgColor(bgColor: string) {
    this.propiedades.backgroundColor = bgColor;
  }

}
