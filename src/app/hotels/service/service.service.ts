import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, of } from "rxjs";
import { first, map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";

import { isUserLoged } from "../../store/auth/reducers/auth.selectors";
import { State } from "../../store/auth/reducers/auth.reducer";
import { LoginRequired } from "../../store/auth/actions/auth.action";

@Injectable({
  providedIn: "root"
})
export class ServiceService implements CanActivate {
  constructor(private store$: Store<State>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    return this.checkStoreUser().pipe(
      map(authed => {
        if (!authed) {
          this.store$.dispatch(new LoginRequired());
          return false;
        }
        return true;
      }),
      first()
    );
  }

  private checkStoreUser(): Observable<boolean> {
    return this.store$.pipe(select(isUserLoged)).pipe(first());
  }
}
