import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    TxCorreo: ['', Validators.required],
    DocumentoIdentidad: ['', Validators.required],
    PasswordUsuario: ['', Validators.required],
    ConfirmPasswordUsuario: ['', Validators.required],
    Nombres: ['', Validators.required],
    ApellidoPaterno: ['', Validators.required],
    ApellidoMaterno: ['', Validators.required],
    NuTelefono: ['', Validators.required],
    IdPerfil: [0, Validators.required]
  })

  constructor(private fb: FormBuilder, 
    private readonly userService: UserService, 
    private router: Router) { }

  register(data: any) {

    this.userService.register(data).subscribe((rest: any) => {
      if(rest.isSuccess) {
        alert("Usuario creado con ID: " + rest.data.idUsuario + " y Nombre: " + rest.data.nombres );
        this.router.navigate(['/login']);
      } else {
        alert(rest.errorMessage);
      }
    })
  }

  onSubmit(){
    if(this.registerForm.valid) {
      this.register(this.registerForm.value);
    } else {
      alert("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
