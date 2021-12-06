import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private readonly http: HttpClient) { }

  getEspecialidades(){
    return this.http.get('https://localhost:44309/api/cita/listarespecialidades');
  }

  getMedicos(coEspecialidad: string) {
    return this.http.get('https://localhost:44309/api/cita/listarmedicos?COESPECIALIDAD=' + coEspecialidad);
  }

  getHorariosDias(coColegiatura: string) {
    return this.http.get('https://localhost:44309/api/cita/listarhorariosdias?COCOLEGIATURA=' + coColegiatura);
  }

  getHorariosHoras(coColegiatura: string, feHorario: string) {
    return this.http.get('https://localhost:44309/api/cita/listarhorarioshoras?COCOLEGIATURA=' + coColegiatura + '&FeHorarioStr=' + feHorario);
  }

  programarCita(data: any, headers : any){
    return this.http.post<any>('https://localhost:44309/api/cita/programarcita', data, { headers });
  }

  reprogramarCita(data: any, headers: any){
    return this.http.post<any>('https://localhost:44309/api/cita/reprogramarcita', data, { headers });
  }

  anularCita(data: any, headers: any){
    return this.http.post<any>('https://localhost:44309/api/cita/anularcita', data, { headers });
  }

  pagarCita(data: any, headers: any){
    return this.http.post<any>('https://localhost:44309/api/cita/pagarcita', data, { headers });
  }

  listarMisCitas(headers: any){
    return this.http.get('https://localhost:44309/api/cita/listarmiscitas', headers = { headers });
  }

}
