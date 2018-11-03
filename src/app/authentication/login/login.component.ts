import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SignUpCredentials } from "../sign-up-credentials";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public suCreds: SignUpCredentials = new SignUpCredentials();
  public selectedTabIndex: number = Tab.Login;
  public isSubmitPending: boolean = false;
  public fezInput: string = "hi";

  public get isLogin(): boolean {
    return this.selectedTabIndex == Tab.Login;
  }

  public get isSignUp(): boolean {
    return this.selectedTabIndex == Tab.Register;
  }

  //private authService: AuthService
  constructor(private router: Router) {
    console.log("here");
  }

  ngOnInit(): void {
    this.selectedTabIndex =
      this.router.routerState.snapshot.url == Route.Login
        ? Tab.Login
        : Tab.Register;
  }

  onSubmit(): void {
    this.isSubmitPending = true;
    this.selectedTabIndex == Tab.Login ? this.onLogin() : this.onRegister();
  }

  onLogin(): void {
    this.router.navigateByUrl("/dashboard");
    // this.authService.signIn(this.suCreds.toCredentials()).subscribe(res => {
    //   this.isSubmitPending = false;
    //   this.router.navigateByUrl("/dashboard");
    // });
  }

  onRegister(): void {
    this.router.navigateByUrl("/dashboard");
    // this.authService.signUp(this.suCreds.toCredentials()).subscribe(res => {
    //   this.isSubmitPending = false;
    //   this.router.navigateByUrl("/dashboard");
    // });
  }
}

enum Route {
  Login = "/login",
  Register = "/register"
}

enum Tab {
  Login = 0,
  Register = 1
}
