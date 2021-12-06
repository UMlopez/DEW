import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm = this.fb.group({
    DocumentoIdentidad: ['', Validators.required],
    TxCorreo: ['', Validators.required],
    PasswordUsuario: ['', Validators.required],
    ConfirmPasswordUsuario: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private readonly userService: UserService,
    private router: Router) { }

  cambiarContraseña(dataForgot: any) {
    this.userService.cambiarcontraseña(dataForgot).subscribe((rest: any) => {
      if (rest.isSuccess) {
        alert("Contraseña modificada con éxito");
        this.router.navigate(['/login']);
      } else {
        alert(rest.errorMessage);
      }
    });
  }

  onSubmit() {

    if (this.forgotPasswordForm.valid) {
      this.cambiarContraseña(this.forgotPasswordForm.value);

    } else {
      alert("Es necesario ingresar todos los datos");
    }

  }

  ngOnInit(): void {
  }

}
