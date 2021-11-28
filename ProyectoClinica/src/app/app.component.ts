import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<re-captcha
(resolved)="resolved($event)"
siteKey="6LeojWMdAAAAAKPzoMpfd5kbC4Rwisc-mc0cCLms"
></re-captcha>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoClinica';
  resolved(captchaResponse: String) {
  console.log(`Captcha resuelto con respuesta: ${captchaResponse}`);
    
}
}