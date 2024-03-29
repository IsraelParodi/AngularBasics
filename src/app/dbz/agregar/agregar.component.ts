import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  @Input() nuevo: IPersonaje = {
    nombre: '',
    poder: 0,
  };
  @Output() onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonajes(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
