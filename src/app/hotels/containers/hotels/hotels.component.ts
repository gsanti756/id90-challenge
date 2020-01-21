import { Component, OnInit } from "@angular/core";
import { FilterHotels, Hotel } from "src/app/store/hotels/models/hotels";

import { Store } from "@ngrx/store";
import { State } from "../../../store/hotels/reducers/hotels.reducer";
import {
  isLoadingHotels,
  hotels
} from "../../../store/hotels/reducers/hotels.selectors";
import { GetHotelsRequest } from "../../../store/hotels/actions/hotels.action";

@Component({
  selector: "app-hotels",
  templateUrl: "./hotels.component.html",
  styleUrls: ["./hotels.component.scss"]
})
export class HotelsComponent implements OnInit {
  loading$ = this.store.select(isLoadingHotels);
  hotels$ = this.store.select(hotels);
  selected: Hotel;
  idSelected: number;

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  onFilterSubmit(event: FilterHotels): void {
    this.store.dispatch(new GetHotelsRequest(event));
  }

  hotelSelected(event: Hotel): void {
    this.idSelected = event.id;
    this.selected = event;
  }
}
