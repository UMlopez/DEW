import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<re-captcha
(resolved)="resolved($event)"
siteKey=""
></re-captcha>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoClinica';
  resolved(captchaResponse: String) {
  console.log(`Captcha resuelto con respuesta: ${captchaResponse}`);
    
}
}