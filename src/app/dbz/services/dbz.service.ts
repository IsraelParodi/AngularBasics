import { Injectable } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  private _personajes: IPersonaje[] = [
    { nombre: 'Goku', poder: 17000 },
    { nombre: 'Vegetta', poder: 13000 },
    { nombre: 'Krillin', poder: 800 },
  ];

  constructor() {}

  obtenerPersonajes(): IPersonaje[] {
    return [...this._personajes];
  }

  agregarPersonajes(personaje: IPersonaje) {
    this._personajes.push(personaje);
  }
}
