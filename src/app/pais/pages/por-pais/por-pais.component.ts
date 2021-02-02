import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  public buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe( (paisesResp) => {
        this.paises = paisesResp;
        console.log(this.paises);
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

}
/*
el parametro termino viene del evento emitido por el componente pais-input
*/
