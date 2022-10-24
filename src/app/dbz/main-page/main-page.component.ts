import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  }

  constructor( private dbzService: DbzService) {
  }


}
