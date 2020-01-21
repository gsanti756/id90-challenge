import { Component, OnInit, Input } from "@angular/core";
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

  @Input() hotels: Hotel[];

  constructor() {}

  ngOnInit() {
    this.latitude = -31.4228733;
    this.longitude = -64.1833163;
  }

  onPressMarker(infowindow: any, lat: number, lng: number): void {
    if (this.previousMarker) {
      this.previousMarker.close();
    }
    this.previousMarker = infowindow;
    this.latitude = lat;
    this.longitude = lng;
  }
}
