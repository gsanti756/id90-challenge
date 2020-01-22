import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Airline } from "src/app/store/auth/models/airline";
import { UserLoginForm } from "../../models/login.model";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  user: UserLoginForm;
  showPassword: boolean;
  submitted: boolean;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  @Input() airlines: Airline[];
  @Input() loading: boolean;
  @Input() error: string;

  @Output() LoginFormSubmit = new EventEmitter<UserLoginForm>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      airline: ["", Validators.compose([Validators.required])],
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const { airline, username, password } = this.loginForm.value;
    this.LoginFormSubmit.emit({ airline, username, password });
  }
}
