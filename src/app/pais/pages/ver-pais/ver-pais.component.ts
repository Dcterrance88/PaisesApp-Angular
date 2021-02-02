import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ({ id }) => {
        this.paisService.getPaisPorAlpha( id )
          .subscribe(pais =>{
            console.log(pais);
          })
      })
  }

}

/*
El ActivatedRoute viene con todo lo necesario para suscribirnos a cualquier cambio de la url.
para hacerlo en el on init usamos la propiedad que inyectamos, llamamos al metodo params el cual
es un observable, asi que vamos a suscribirnos y con ello obtenemos el parametro de la ruta definida
con id pero dentro de el tenemos que hacer otro observable para traer la informacion del pais
*/
