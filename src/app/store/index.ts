import { environment } from "../../environments/environment";

import {
  ActionReducerMap,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from "@ngrx/store";

import { RouterStateUrl } from "./RouterState";

import { storeFreeze } from "ngrx-store-freeze";

// Reducers
import * as fromAuth from "./auth/reducers/auth.reducer";
import * as fromRouter from "@ngrx/router-store";

export interface AsyncAction {
  loading: boolean;
  error?: string;
  message?: string;
}

export interface State {
  auth: fromAuth.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State | any> = {
  auth: fromAuth.AuthReducer,
  router: fromRouter.routerReducer
};

export const logger = (reducer: ActionReducer<State>): ActionReducer<State> => {
  return (state: State, action: any): State => {
    console.log("state: ", state);
    console.log("action: ", action);
    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getAuthState = createFeatureSelector<fromAuth.State>("auth");
