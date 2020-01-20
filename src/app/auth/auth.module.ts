import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HeaderComponent } from "../shared/components/header/header.component";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./containers/login/login.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoginImageComponent } from "./components/login-image/login-image.component";

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    LoginFormComponent,
    LoginImageComponent
  ],
  imports: [CommonModule, FontAwesomeModule, NgbModule, AuthRoutingModule]
})
export class AuthModule {}
