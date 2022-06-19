import { Component, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  nuevo: IPersonaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  constructor() {}

  ngOnInit(): void {}
}
