import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { from, Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Airline } from "../models/airline";
import { UserLogin } from "../models/user";

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

  public login({ airline, username, password }: UserLogin): Observable<any> {
    return this.http.post("session.json", { airline, username, password }).pipe(
      map(data => data),
      catchError(x => {
        const { error } = x.error;
        return throwError(error);
      })
    );
  }
}
