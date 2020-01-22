import * as HotelsActions from "../actions/hotels.action";
import { HotelsActionTypes } from "../actions/hotels.action";

import { AsyncAction } from "../../index";
import { Hotel, HotelResponse } from "../models/hotels";

export interface State {
  hotels: HotelResponse;

  getHotels?: AsyncAction;
  getNextPage?: AsyncAction;
}

const initialState: State = {
  hotels: {
    hotels: [],
    meta: null
  }
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

    case HotelsActionTypes.GetNextPageRequest:
      return {
        ...state,
        getNextPage: {
          loading: true,
          error: ""
        }
      };

    case HotelsActionTypes.GetNextPageSuccess:
      const { hotels } = state.hotels;
      return {
        ...state,
        hotels: {
          hotels: [...hotels, ...action.payload.hotels],
          meta: action.payload.meta
        },
        getNextPage: {
          loading: false,
          error: ""
        }
      };

    case HotelsActionTypes.GetNextPageFailure:
      return {
        ...state,
        getNextPage: {
          loading: false,
          error: action.payload
        }
      };

    default:
      return state;
  }
}
