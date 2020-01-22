import { Component, OnInit } from "@angular/core";
import { FilterHotels, Hotel } from "src/app/store/hotels/models/hotels";

import { Store } from "@ngrx/store";
import { State } from "../../../store/hotels/reducers/hotels.reducer";
import {
  hotels,
  metaSearch,
  isLoadingHotels,
  isLoadingNextPage
} from "../../../store/hotels/reducers/hotels.selectors";
import {
  GetHotelsRequest,
  GetNextPageRequest
} from "../../../store/hotels/actions/hotels.action";

@Component({
  selector: "app-hotels",
  templateUrl: "./hotels.component.html",
  styleUrls: ["./hotels.component.scss"]
})
export class HotelsComponent implements OnInit {
  loading$ = this.store.select(isLoadingHotels);
  hotels$ = this.store.select(hotels);
  metaSearch$ = this.store.select(metaSearch);
  loadingNextPage$ = this.store.select(isLoadingNextPage);

  formFilter: FilterHotels;

  selected: Hotel;
  idSelected: number;

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  onFilterSubmit(event: FilterHotels): void {
    this.formFilter = event;
    this.store.dispatch(new GetHotelsRequest(event));
  }

  hotelSelected(event: Hotel): void {
    this.idSelected = event.id;
    this.selected = event;
  }

  onScroll(event): void {
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      this.metaSearch$.subscribe(
        data => {
          const { page, total_pages } = data;
          if (page < total_pages) {
            const { destination, checkin, checkout, guests } = this.formFilter;
            this.store.dispatch(
              new GetNextPageRequest({
                destination,
                checkin,
                checkout,
                guests,
                page: page + 1
              })
            );
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
