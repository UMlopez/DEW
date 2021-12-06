import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<re-captcha
    (resolved)="resolved($event)"
    siteKey="6Ldnw0obAAAAACmBMsrAOxLhXKE8-O6hpmFuAS5q"
  ></re-captcha>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContosoApp';
  token = sessionStorage.getItem('token');
  user = sessionStorage.getItem('user');
  perfil = sessionStorage.getItem('perfil');
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
