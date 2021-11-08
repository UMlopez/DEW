import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgramarCitaComponent } from './pages/programar-cita/programar-cita.component';
import { CitasReservadasComponent } from './pages/citas-reservadas/citas-reservadas.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ComprobantesComponent } from './pages/comprobantes/comprobantes.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramarCitaComponent,
    CitasReservadasComponent,
    PresupuestoComponent,
    LoginComponent,
    UsuariosComponent,
    ComprobantesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
