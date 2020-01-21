import { createSelector } from "@ngrx/store";

import { getHotelsState } from "../../index";
import { State } from "./hotels.reducer";

export const isLoadingHotels = createSelector(
  getHotelsState,
  (state: State) => state.getHotels && state.getHotels.loading
);

export const hotels = createSelector(
  getHotelsState,
  (state: State) => state.hotels
);
