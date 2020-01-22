import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { LoginFormComponent } from "./login-form.component";
import { By } from "@angular/platform-browser";

describe("LoginFormComponent", () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent, FaIconComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("username field validity", () => {
    const username = component.loginForm.controls["username"];
    expect(username.valid).toBeFalsy();
    username.setValue("");
    expect(username.hasError("required")).toBeTruthy();
    username.setValue("A");
    expect(username.hasError("required")).toBeFalsy();
  });

  it("password field validity", () => {
    const password = component.loginForm.controls["password"];
    expect(password.valid).toBeFalsy();
    password.setValue("");
    expect(password.hasError("required")).toBeTruthy();
    password.setValue("A");
    expect(password.hasError("required")).toBeFalsy();
  });

  it("show spinner in login", fakeAsync(() => {
    component.loading = true;
    tick(500);
    const mock = fixture.debugElement.query(By.css(".spinner-border"));
    expect(mock).toBeDefined();
  }));
});
