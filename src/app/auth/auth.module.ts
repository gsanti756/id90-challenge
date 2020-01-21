import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HeaderComponent } from "../shared/components/header/header.component";

import { AppStoreModule } from "../store/store.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./containers/login/login.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";

@NgModule({
  declarations: [HeaderComponent, LoginComponent, LoginFormComponent],

  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    AppStoreModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
