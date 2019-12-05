import { Component, OnInit, OnDestroy, Host, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { takeWhile } from 'rxjs/operators';
import { ErrorService } from 'src/app/core/services/error.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  configs = {
    isLogin: true,
    actionText: 'Login',
    buttonActionText: 'Criar uma Conta',
    isLoading: false
  };
  private nameControl =
          new FormControl('', [Validators.required, Validators.minLength(5)]);
  private alive = true;

  @HostBinding('class.app-login-spinner') private applySpinnerClass = true;

  constructor(
    public authService: AuthService,
    private errorService: ErrorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.createForm();

    const userData = this.authService.getRememberMe();
    if (userData) {
      this.email.setValue(userData.email);
      this.password.setValue(userData.password);
    }
  }


  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);

    this.configs.isLoading = true;

    const operation =
      (this.configs.isLogin)
        ? this.authService.signinUser(this.loginForm.value)
        : this.authService.signupUser(this.loginForm.value);

    operation
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe(
        res => {
          this.authService.setRememberMe(this.loginForm.value);
          const redirect: string = this.authService.redirectUrl || '/dashboard';
          console.log('redirecting...', redirect);
          this.router.navigate([redirect]);
          this.authService.redirectUrl = null;
          this.configs.isLoading = false;
        },
        err => {
          console.log(err);
          this.configs.isLoading = false;
          this.snackBar.open(this.errorService.getErrorMessage(err), 'Ok', {duration: 5000, verticalPosition: 'top'});
        },
        () => console.log('Obsevable completed!')
      );

  }

  changeAction(): void {
    this.configs.isLogin = !this.configs.isLogin;
    this.configs.actionText = !this.configs.isLogin ? 'Criar' : 'Login';
    this.configs.buttonActionText = !this.configs.isLogin ? 'Já tenho uma conta' : 'Criar conta';
    !this.configs.isLogin ? this.loginForm.addControl('nome', this.nameControl) : this.loginForm.removeControl('name');
  }

  // tslint:disable-next-line:no-angle-bracket-type-assertion
  get nome(): FormControl { return <FormControl> this.loginForm.get('nome'); }
  // tslint:disable-next-line:no-angle-bracket-type-assertion
  get email(): FormControl { return <FormControl> this.loginForm.get('email'); }
  // tslint:disable-next-line:no-angle-bracket-type-assertion
  get password(): FormControl { return <FormControl> this.loginForm.get('password'); }

  onKeepSigned(): void {
    this.authService.toggleKeepSigned();
  }

  onRememberMe(): void {
    this.authService.toggleRememberMe();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
