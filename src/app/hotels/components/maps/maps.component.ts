import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Hotel } from "src/app/store/hotels/models/hotels";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"]
})
export class MapsComponent implements OnInit {
  latitude: number;
  longitude: number;
  previousMarker: any;
  hotelSelected: Hotel;
  lastChoiceFromMarket: number;

  @Input() hotels: Hotel[];
  @Input() set selected(hotel: Hotel) {
    if (
      hotel &&
      hotel.id !== this.lastChoiceFromMarket &&
      this.previousMarker
    ) {
      this.previousMarker.close();
    }
    this.hotelSelected = hotel;
  }

  @Output() MapsHotelSelected = new EventEmitter<Hotel>();

  constructor() {}

  ngOnInit() {
    this.latitude = -31.4228733;
    this.longitude = -64.1833163;
  }

  onPressMarker(infowindow: any, hotel: Hotel, lat: number, lng: number): void {
    if (this.previousMarker) {
      this.previousMarker.close();
    }
    this.previousMarker = infowindow;
    this.lastChoiceFromMarket = hotel.id;
    this.MapsHotelSelected.emit(hotel);
  }
}
