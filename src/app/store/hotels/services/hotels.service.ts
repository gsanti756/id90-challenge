import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { from, Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { FilterHotels, Hotel } from "../models/hotels";

@Injectable({
  providedIn: "root"
})
export class HotelsService {
  constructor(private http: HttpClient) {}

  public getHotels({
    destination,
    checkin,
    checkout,
    guests,
    page
  }: FilterHotels): Observable<any[]> {
    const params = new HttpParams()
      .set("destination", destination)
      .set("checkin", checkin)
      .set("checkout", checkout)
      .set("guests[]", guests.toString())
      .set("page", page ? page.toString() : "1");

    return this.http
      .get<any>("api/v1/hotels.json", { params })
      .pipe(
        map(data => data),
        catchError(x => {
          const { error } = x.error;
          return throwError(error);
        })
      );
  }
}
