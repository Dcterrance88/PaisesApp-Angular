import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';
  
  public get httpParams () {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor(private http: HttpClient) { }

  public buscarPais(termino: string) : Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams} );
  }

  public buscarCapital(termino: string) : Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  public getPaisPorAlpha(id: string) : Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  public buscarRegion(region: string) : Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}?fields=name;capital;alpha2code;flag;population`;
    return this.http.get<Country[]>(url, {params:this.httpParams})
            .pipe(
              tap(console.log)
            );
  }
}

/*HttpParams este objeto permite configurar parametros de un URL, en este caso el primer parametro es
el nombre del cambio y el segundo sus valores, por ultimo en el retorno del observable se asigna como
segundo parametro, los parametro definidos del objeto HttpParams, el cual se lo especificamos como un
objeto
*/
