import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li{
    cursor:pointer;
  }
  `]
})
export class PorPaisComponent {

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = [];
  public mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  public buscar(termino: string): void {

    this.mostrarSugerencias = false;
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

  sugerencias(termino: string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,3),
      (err) => this.paisesSugeridos = [])
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
/*
el parametro termino viene del evento emitido por el componente pais-input
*/
