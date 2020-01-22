import { createSelector } from "@ngrx/store";

import { getHotelsState } from "../../index";
import { State } from "./hotels.reducer";

export const isLoadingHotels = createSelector(
  getHotelsState,
  (state: State) => state.getHotels && state.getHotels.loading
);

export const hotels = createSelector(
  getHotelsState,
  (state: State) => state.hotels.hotels
);

export const metaSearch = createSelector(
  getHotelsState,
  (state: State) => state.hotels.meta
);

export const isLoadingNextPage = createSelector(
  getHotelsState,
  (state: State) => state.getNextPage && state.getNextPage.loading
);
