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
    guests
  }: FilterHotels): Observable<Hotel[]> {
    const params = new HttpParams()
      .set("destination", "" /*destination */)
      .set("checkin", "2018-10-24" /* checkin */)
      .set("checkout", "2018-10-25" /* checkout*/)
      .set("guests", "2" /*guests.toString()*/)
      .set("sort_criteria", "Overall")
      .set("sort_order", "desc")
      .set("per_page", "25")
      .set("page", "1")
      .set("currency", "USD")
      .set("radius", "2")
      .set("rooms", "1");

    return of([
      {
        id: 1,
        lat: -31.4272312,
        lng: -64.1957617,
        name: "Hotel 1",
        address: "Jorge raul recalde 1653",
        image: "https://www.ahstatic.com/photos/9399_ho_00_p_1024x768.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque nunc enim, faucibus vel urna sed, tempor congue erat. 
        Aliquam pharetra fermentum sem. Phasellus accumsan tincidunt mauris, ac malesuada mi aliquet nec.`
      },

      {
        id: 2,
        lat: -31.4171602,
        lng: -64.1963196,
        name: "Hotel 2",
        address: "Obispo Salguero 1653",
        image: "https://www.ahstatic.com/photos/9399_ho_00_p_1024x768.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque nunc enim, faucibus vel urna sed, tempor congue erat. 
        Aliquam pharetra fermentum sem. Phasellus accumsan tincidunt mauris, ac malesuada mi aliquet nec.`
      },

      {
        id: 3,
        lat: -31.4293185,
        lng: -64.1978217,
        name: "Hotel 3",
        address: "Colon 5000",
        image: "https://www.ahstatic.com/photos/9399_ho_00_p_1024x768.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque nunc enim, faucibus vel urna sed, tempor congue erat. 
        Aliquam pharetra fermentum sem. Phasellus accumsan tincidunt mauris, ac malesuada mi aliquet nec.`
      },

      {
        id: 4,
        lat: -31.4171652,
        lng: -64.1957611,
        name: "Hotel 4",
        address: "Sarachaga 999",
        image: "https://www.ahstatic.com/photos/9399_ho_00_p_1024x768.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque nunc enim, faucibus vel urna sed, tempor congue erat. 
        Aliquam pharetra fermentum sem. Phasellus accumsan tincidunt mauris, ac malesuada mi aliquet nec.`
      },

      {
        id: 5,
        lat: -31.4171652,
        lng: -64.1953696,
        name: "Hotel 5",
        address: "Jujuy 2188",
        image: "https://www.ahstatic.com/photos/9399_ho_00_p_1024x768.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque nunc enim, faucibus vel urna sed, tempor congue erat. 
        Aliquam pharetra fermentum sem. Phasellus accumsan tincidunt mauris, ac malesuada mi aliquet nec.`
      },

      {
        id: 6,
        lat: -31.4293115,
        lng: -64.1971287,
        name: "Hotel 6",
        address: "Tomas Guido 154",
        image: "https://www.ahstatic.com/photos/9399_ho_00_p_1024x768.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque nunc enim, faucibus vel urna sed, tempor congue erat. 
        Aliquam pharetra fermentum sem. Phasellus accumsan tincidunt mauris, ac malesuada mi aliquet nec.`
      }
    ]);

    // return this.http.get("api/v1/hotels.json", { params }).pipe(
    //   map(data => data),
    //   catchError(x => {
    //     const { error } = x.error;
    //     return throwError(error);
    //   })
    // );
  }
}
