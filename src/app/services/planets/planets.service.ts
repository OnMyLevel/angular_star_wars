import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Res } from 'src/app/models/res';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient ){ }

  private static log(message: string) {
    console.log(`ContactService: ${message}`);
  }

  getPlanets() :Observable<any>{
    return this.http.get<Res>("https://swapi.dev/api/planets/")
      .pipe(
        catchError(this.handleError('erreur', []))
      );
  }

  getPlanetDetails(url:string) :Observable<any>{
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
      PlanetsService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of (result as T);
    };
  }
}
