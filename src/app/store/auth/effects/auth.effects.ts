import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { observable, of, Observable } from "rxjs";
import { catchError, map, exhaustMap, tap } from "rxjs/operators";

import { AuthActionTypes } from "../actions/auth.action";
import * as AuthActions from "../actions/auth.action";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthEffects {
  @Effect()
  loginRequest$: Observable<Action> = this.actions$.pipe(
    ofType<AuthActions.LoginRequest>(AuthActionTypes.LoginRequest),
    exhaustMap(action => {
      const { airline, username, password } = action.payload;
      return this.authSrvice.login({ airline, username, password }).pipe(
        map(response => new AuthActions.LoginSuccess(response)),
        catchError(error => of(new AuthActions.LoginFailure(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<AuthActions.LoginSuccess>(AuthActionTypes.LoginSuccess),
    tap(value => this.router.navigate(["/hotels"]))
  );

  @Effect({ dispatch: false })
  loginFailure$: Observable<Action> = this.actions$.pipe(
    ofType<AuthActions.LoginFailure>(AuthActionTypes.LoginFailure)
  );

  @Effect({ dispatch: false })
  loginRequired$: Observable<Action> = this.actions$.pipe(
    ofType<AuthActions.LoginRequired>(AuthActionTypes.LoginRequired),
    tap(value => this.router.navigate(["/login"]))
  );

  constructor(
    private actions$: Actions,
    private authSrvice: AuthService,
    private router: Router
  ) {}
}
