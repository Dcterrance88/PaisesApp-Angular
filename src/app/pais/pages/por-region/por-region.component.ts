import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  public regiones : string[] = [ 'africa', 'america', 'asia', 'europe', 'oceania'];
  public regionActiva : string = '';
  public paises : Country[] = [];

  constructor(private paisService:PaisService) { }

  public getClaseCSS( region : string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1';
  }

  public activarRegion( region : string ) {
    if(region === this.regionActiva){ return; }
    this.regionActiva = (region === 'america') ? 'americas' : region;
    this.paises = [];
    this.paisService.buscarRegion(this.regionActiva).subscribe( paises => this.paises = paises);
    console.log(this.paises)
  }

}
