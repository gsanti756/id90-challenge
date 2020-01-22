import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { LoginComponent } from "./login.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";
import { AppStoreModule } from "../../../store/store.module";
import { AuthService } from "../../../store/auth/services/auth.service";
import { of } from "rxjs";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const storeMock = {
    select() {
      return of({ name: "Peter", registrationDate: "11/11/18" });
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        HeaderComponent,
        LoginFormComponent,
        FaIconComponent
      ],
      imports: [ReactiveFormsModule, AppStoreModule, RouterTestingModule],
      providers: [AuthService, HttpClientTestingModule, FaIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
