import { createSelector } from "@ngrx/store";

import { getAuthState } from "../../index";
import { State } from "./auth.reducer";

export const isLoadingLogin = createSelector(
  getAuthState,
  (state: State) => state.login && state.login.loading
);

export const loginError = createSelector(
  getAuthState,
  (state: State) => state.login && state.login.error
);
