import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pasoCaptcha: boolean = false;

  public resolved(captchaResponse: string): void {
    this.pasoCaptcha = true;
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    // Bienvenido humano
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    // No eres humano
  }

  loginForm = this.fb.group({
    loginUsuario: ['', Validators.required],
    passwordUsuario: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private readonly userService: UserService,
    private router: Router) {
  }

  login(dataLogin: any) {
    this.userService.login(dataLogin).subscribe((rest: any) => {
      if (rest.isSuccess) {
        sessionStorage.setItem('token', rest.data.token);
        sessionStorage.setItem('user', rest.data.nombres + ' ' + rest.data.apellidopaterno);
        sessionStorage.setItem('perfil', rest.data.idPerfil);
        console.log(rest.data);
        this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
          alert("Bienvenido, " + rest.data.nombres);
          this.router.navigate(['home']);
          window.location.reload();
        })
      } else {
        alert('Credenciales inválidas');
      }
    });
  }

  onSubmit() {

    if (this.pasoCaptcha) {
      if (this.loginForm.valid) {
        this.login(this.loginForm.value);

      } else {
        alert("Formulario no válido");
      }
    }
    else {
      alert("Captcha no válido");
    }

  }

  ngOnInit(): void {
  }

}
