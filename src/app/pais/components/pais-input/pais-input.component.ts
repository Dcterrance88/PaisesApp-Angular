import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  public termino : string = '';

  public buscar(): void {
    this.onEnter.emit( this.termino );
  }
}

/*
onEnter es un evento y es necesario especificar el tipo de evento que va a emitir, en este caso
el tipo de evento que va a emirtir va a ser el termino y este es de tipo string
*/
