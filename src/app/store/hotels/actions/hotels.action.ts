import { Action } from "@ngrx/store";

import { FilterHotels } from "../models/hotels";

export enum HotelsActionTypes {
  GetHotelsRequest = "[Hotels] GET_HOTELS_REQUEST",
  GetHotelsSuccess = "[Hotels] GET_HOTELS_SUCCESS",
  GetHotelsFailure = "[Hotels] GET_HOTELS_FAILURE"
}

export class GetHotelsRequest implements Action {
  readonly type = HotelsActionTypes.GetHotelsRequest;
  constructor(public payload: FilterHotels) {}
}

export class GetHotelsSuccess implements Action {
  readonly type = HotelsActionTypes.GetHotelsSuccess;
  constructor(public payload: any) {}
}

export class GetHotelsFailure implements Action {
  readonly type = HotelsActionTypes.GetHotelsFailure;
  constructor(public payload: any) {}
}

export type actions = GetHotelsRequest | GetHotelsSuccess | GetHotelsFailure;
