import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  register(data: any) {
    return this.http.post<any>('https://localhost:44309/api/usuario/register', data);
  }

  login(dataLogin: any){
    return this.http.post<any>('https://localhost:44309/api/usuario/login', dataLogin);
  }

  insert(data: any, headers: { Authorization: string; }) {
    return this.http.post<any>('https://localhost:44309/api/usuario/insert', data, { headers });
  }

  cambiarcontraseña(dataForgot: any) {
    return this.http.post<any>('https://localhost:44309/api/usuario/cambiarcontraseña', dataForgot);
  }
}
