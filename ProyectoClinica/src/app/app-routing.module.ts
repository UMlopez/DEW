import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CitasReservadasComponent } from "./pages/citas-reservadas/citas-reservadas.component";

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProgramarCitaComponent } from "./pages/programar-cita/programar-cita.component";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'programar-cita', component: ProgramarCitaComponent},
    { path: 'citas-reservadas', component: CitasReservadasComponent},
    { path: 'login', component: LoginComponent},
    { path: 'usuario', component: UsuariosComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}