import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha(id)),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais);
  }

}
/*
el tap es un operador que dispara un efecto secundario en este caso cuando le pasamos por ejemplo un 
console log, imprimira el resultado de ese observable
*/