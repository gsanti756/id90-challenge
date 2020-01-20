import { Component, OnInit } from "@angular/core";
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

  constructor(private authService: AuthService) {}

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

  onSubmit(event: UserLoginForm): void {}
}
