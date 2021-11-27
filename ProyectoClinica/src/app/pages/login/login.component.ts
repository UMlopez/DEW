import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecaptchaErrorParameters } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public resolved(captchaResponse : string) : void {
     console.log ('Captcha Resuelto : ${captchaResponse}')
   }
   public onError(errorDetails: RecaptchaErrorParameters) : void {
     console.log('Ocurrio un error : ${errordetails}')
   }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
