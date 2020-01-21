import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { State } from "../../../store/auth/reducers/auth.reducer";
import {
  loginError,
  isLoadingLogin
} from "../../../store/auth/reducers/auth.selectors";
import { LoginRequest } from "../../../store/auth/actions/auth.action";
import { AuthService } from "../../../store/auth/services/auth.service";

import { Airline } from "src/app/store/auth/models/airline";
import { UserLoginForm } from "../../models/login.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  airlines: Airline[];
  loadingAirlines: boolean;
  loading$ = this.store.select(isLoadingLogin);
  error$ = this.store.select(loginError);

  constructor(private authService: AuthService, private store: Store<State>) {}

  ngOnInit() {
    this.authService.getAirlines().subscribe(
      data => {
        this.airlines = data;
        this.loadingAirlines = false;
      },
      () => {
        this.loadingAirlines = false;
      }
    );
  }

  onSubmit(event: UserLoginForm): void {
    const { airline, username, password } = event;
    this.store.dispatch(new LoginRequest({ airline, username, password }));
  }
}
