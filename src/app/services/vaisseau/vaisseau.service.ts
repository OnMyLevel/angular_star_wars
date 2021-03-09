import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Res } from 'src/app/models/res';
import {catchError} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  getFilmDetails(arg0: never) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient ){ }

  private static log(message: string) {
    console.log(`ContactService: ${message}`);
  }

  getVaisseaux() :Observable<any>{
    return this.http.get<Res>("https://swapi.dev/api/starships/")
      .pipe(
        catchError(this.handleError('erreur', []))
      );
  }

  getVaisseauDetails(id:number) :Observable<any>{
    return this.http.get<Res>("https://swapi.dev/api/starships/"+id)
      .pipe(
        catchError(this.handleError('erreur', []))
      );
  }

  getVaisseauDetailsUrl(url:string) :Observable<any>{
    return this.http.get<Res>(url)
      .pipe(
        catchError(this.handleError('erreur', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      VaisseauService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of (result as T);
    };
  }
}
