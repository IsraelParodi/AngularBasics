import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador App';
  counter: number = 0;
  base: number = 8;

  acumular(valor: number){
    this.counter += valor
  }


}
