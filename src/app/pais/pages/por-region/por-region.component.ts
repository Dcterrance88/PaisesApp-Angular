import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  public regiones : string[] = [ 'africa', 'america', 'asia', 'europe', 'oceania'];

  public regionActiva : string = '';

  constructor() { }

  public activarRegion( region : string ) {
    this.regionActiva = region;

    //TODO: Hacer el llamado al servicio
  }

}
