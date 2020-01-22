import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Hotel } from "src/app/store/hotels/models/hotels";

@Component({
  selector: "app-hotels-list",
  templateUrl: "./hotels-list.component.html",
  styleUrls: ["./hotels-list.component.scss"]
})
export class HotelsListComponent implements OnInit {
  @Input() hotels: Hotel[];
  @Input() idSelected: number;
  @Input() loadingNextPage: boolean;

  @Output() HotelsListHotelSelected = new EventEmitter<Hotel>();

  constructor() {}

  ngOnInit() {}

  onPressHotel(hotel: Hotel) {
    this.HotelsListHotelSelected.emit(hotel);
  }

  getFullAddress(item: Hotel): string {
    const {
      location: { city, country }
    } = item;
    return `${city} - ${country}`;
  }
}
