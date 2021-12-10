import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/login/logout.component';
import { MisCitasComponent } from './pages/mis-citas/mis-citas.component';
import { ProgramarComponent } from './pages/programar/programar.component';
import { RegisterComponent } from './pages/register/register.component';
import { StaffComponent } from './pages/staff/staff.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'programar/:id', component: ProgramarComponent },
  { path: 'citas', component: MisCitasComponent },
  { path: 'clinica', component: ClinicaComponent},
  { path: 'staff', component: StaffComponent},
  { path: 'especialidades', component: EspecialidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
