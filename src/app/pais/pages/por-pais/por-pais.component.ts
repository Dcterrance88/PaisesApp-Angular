import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  public termino: string = '';
  public hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  public buscar(): void {
    this.hayError = false;
    console.log(this.termino);
    
    this.paisService.buscarPais(this.termino)
      .subscribe((resp) => {
        console.log(resp);
      }, (err) => {
        this.hayError = true;
      });
  }

}
