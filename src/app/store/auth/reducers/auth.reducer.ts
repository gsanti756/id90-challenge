import * as AuthActions from "../actions/auth.action";
import { AuthActionTypes } from "../actions/auth.action";
import { User } from "../models/user";
import { AsyncAction } from "../../index";

export interface State {
  user?: User;
  token: string;

  login?: AsyncAction;
}

const initialState: State = {
  token: ""
};

export function AuthReducer(
  state: State = initialState,
  action: AuthActions.actions
): State {
  switch (action.type) {
    case AuthActionTypes.LoginRequest:
      return {
        ...state,
        login: {
          loading: true,
          error: ""
        }
      };

    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.payload.member,
        login: {
          loading: false,
          error: ""
        }
      };

    case AuthActionTypes.LoginFailure:
      return {
        ...state,
        login: {
          loading: false,
          error: action.payload
        }
      };

    default:
      return state;
  }
}
