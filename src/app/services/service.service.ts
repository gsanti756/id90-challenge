import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { isUserLoged } from "../store/auth/reducers/auth.selectors";
import { State } from "../store/auth/reducers/auth.reducer";
import { Observable } from "rxjs";
import { first, map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ServiceService implements CanActivate {
  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    return this.checkStoreUser().pipe(
      map(authed => {
        if (authed) {
          this.router.navigateByUrl("/hotels");
          return false;
        }
        this.router.navigateByUrl("/login");
        return true;
      }),
      first()
    );
  }

  private checkStoreUser(): Observable<boolean> {
    return this.store$.pipe(select(isUserLoged)).pipe(first());
  }

  constructor(private store$: Store<State>, private router: Router) {}
}
