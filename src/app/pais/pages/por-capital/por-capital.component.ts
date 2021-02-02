import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino : string = '';
  public hayError: boolean = false;
  public capitales: Country[] = [];

  constructor(private paisService: PaisService) { }

  public buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe( (capitalResp) => {
        this.capitales = capitalResp;
        console.log(this.capitales);
      }, (err) => {
        this.hayError = true;
        this.capitales = [];
      });
  }

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: Crear sugerencias.

  }
}