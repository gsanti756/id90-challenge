import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { from, Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Airline } from "../models/airline";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public getAirlines(): Observable<Airline[]> {
    return this.http.get<Airline[]>("airlines").pipe(
      tap(),
      catchError(x => throwError(x))
    );
  }

  public login(user: any): Observable<any> {
    return from([true]);
  }
}
