import { Action } from "@ngrx/store";

import { UserLogin } from "../models/user";

export enum AuthActionTypes {
  LoginRequest = "[Auth] LOGIN_REQUEST",
  LoginSuccess = "[Auth] LOGIN_SUCCESS",
  LoginFailure = "[Auth] LOGIN_FAILURE"
}

export class LoginRequest implements Action {
  readonly type = AuthActionTypes.LoginRequest;
  constructor(public payload: UserLogin) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: any) {}
}

export type actions = LoginRequest | LoginSuccess | LoginFailure;
