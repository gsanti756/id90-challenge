import * as HotelsActions from "../actions/hotels.action";
import { HotelsActionTypes } from "../actions/hotels.action";

import { AsyncAction } from "../../index";
import { Hotel } from "../models/hotels";

export interface State {
  hotels: Hotel[];

  getHotels?: AsyncAction;
}

const initialState: State = {
  hotels: []
};

export function HotelsReducer(
  state: State = initialState,
  action: HotelsActions.actions
): State {
  switch (action.type) {
    case HotelsActionTypes.GetHotelsRequest:
      return {
        ...state,
        getHotels: {
          loading: true,
          error: ""
        }
      };

    case HotelsActionTypes.GetHotelsSuccess:
      return {
        ...state,
        hotels: action.payload,
        getHotels: {
          loading: false,
          error: ""
        }
      };

    case HotelsActionTypes.GetHotelsFailure:
      return {
        ...state,
        getHotels: {
          loading: false,
          error: action.payload
        }
      };

    default:
      return state;
  }
}
