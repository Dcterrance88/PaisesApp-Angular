import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '', // <- path de la ruta -- localhost:4200
    component: PorPaisComponent, // <- componente de la ruta
    pathMatch: 'full' // <- cuando se este en el url especificado, se quiere que caiga en ese lugar
  },
  {
    path: 'region', // localhost:4200/region
    component: PorRegionComponent,
  },
  {
    path: 'capital', // localhost:4200/capital
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id', // con ':' se especifica una ruta dinamica con un argumento, en este caso id
    component: VerPaisComponent
  },
  {
    path: '**', // cuando la ruta no coincide con las definidas se coloca **
    redirectTo: ''
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot( routes ) //forRoot: para rutas principales
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}
