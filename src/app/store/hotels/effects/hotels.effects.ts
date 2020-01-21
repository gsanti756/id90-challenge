import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, Observable } from "rxjs";
import { catchError, map, exhaustMap, tap } from "rxjs/operators";

import { HotelsActionTypes } from "../actions/hotels.action";
import * as HotelsActions from "../actions/hotels.action";
import { HotelsService } from "../services/hotels.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class HotelsEffects {
  @Effect()
  getHotelsRequest$: Observable<Action> = this.actions$.pipe(
    ofType<HotelsActions.GetHotelsRequest>(HotelsActionTypes.GetHotelsRequest),
    exhaustMap(action => {
      const { destination, checkin, checkout, guests } = action.payload;
      return this.hotelsService
        .getHotels({ destination, checkin, checkout, guests })
        .pipe(
          map(response => new HotelsActions.GetHotelsSuccess(response)),
          catchError(error => of(new HotelsActions.GetHotelsFailure(error)))
        );
    })
  );

  @Effect({ dispatch: false })
  getHotelsSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<HotelsActions.GetHotelsSuccess>(HotelsActionTypes.GetHotelsSuccess),
    tap(value => this.router.navigate(["/hotels"]))
  );

  @Effect({ dispatch: false })
  getHotelsFailure$: Observable<Action> = this.actions$.pipe(
    ofType<HotelsActions.GetHotelsFailure>(HotelsActionTypes.GetHotelsFailure)
  );

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private hotelsService: HotelsService,
    private router: Router
  ) {}
}
