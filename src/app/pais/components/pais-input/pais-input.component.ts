import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public debouncer: Subject<string> = new Subject();

  public termino: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(400))
    .subscribe( valor =>{
      this.onDebounce.emit(valor);
    });
  }

  public buscar(): void {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}

/*
onEnter es un evento y es necesario especificar el tipo de evento que va a emitir, en este caso
el tipo de evento que va a emirtir va a ser el termino y este es de tipo string

onDebounce se va a emitir cuando la persona deja de escribir

ngOnInit se dispara una unica vez cuando el componente es creado

dentro del onInit se esta suscribiendo al debouncer como un observador, por medio del metodo
teclaPresionada suscribe al evento para emitir un valor cuando se escribe en el input, (el metodo teclaPresionada
  esta añadido en el input).Antes del suscribe añadidmos un pipe que nos permite transformar la salida
  de ese suscribe, dentro de el usamos el operador que nos permite especifiar x milesimas de segundo para 
  dar una espera antes de emitir el siguiente valor, en este caso el subscribe
*/
