import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-programar',
  templateUrl: './programar.component.html',
  styleUrls: ['./programar.component.css']
})
export class ProgramarComponent implements OnInit {

  CoAtencion: any = 0;
  especialidades : any[] = [];
  medicos : any[] = [];
  dias : any[] = [];
  horas : any[] = [];
  data: any = {};

  programarForm = this.fb.group({
    coAtencion: 0,
    feAtencion: '',
    coColegiatura: ['', Validators.required],
    coEstadoAtencion: 0,
    coHorario: ['', Validators.required]
  });

  constructor(private readonly citaService: CitaService,
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    this.getEspecialidades();
  }

  getEspecialidades() {
    this.citaService.getEspecialidades().subscribe((rest: any) => {
      this.especialidades = rest.data;
      this.medicos = [];
      this.dias = [];
      this.horas = [];
    });
  }

  onEspecialidadSelected(coEspecialidad : string){
    this.medicos = [];
    this.dias = [];
    this.horas = [];
    
    if(coEspecialidad != "0"){
      this.citaService.getMedicos(coEspecialidad).subscribe((rest: any) => {
        this.medicos = rest.data;
      });
    }
    
  }

  onMedicoSelected(coColegiatura : string){
    this.dias = [];
    this.horas = [];

    if(coColegiatura != "0"){
      this.citaService.getHorariosDias(coColegiatura).subscribe((rest: any) => {
        this.dias = rest.data;
      });
    }
    
  }

  onDiaSelected(coColegiatura: string, feHorario : string){
    this.horas = [];

    if(feHorario != ""){
      this.citaService.getHorariosHoras(coColegiatura, feHorario).subscribe((rest: any) => {
        this.horas = rest.data;
      });
    }
    
  }

  programarCita(data: any) {
    const token = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token };

    this.citaService.programarCita(data, header).subscribe((rest: any) => {
      if(rest.isSuccess) {
        alert('Cita programada para el día ' + rest.data.feAtencionStr);
        window.location.href = "/citas";
      } else {
        alert(rest.errorMessage);
      }
    })
  }

  reprogramarCita(data: any) {
    const token = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token };

    this.citaService.reprogramarCita(data, header).subscribe((rest: any) => {
      if(rest.isSuccess) {
        console.log(rest.data)
        alert('Cita reprogramada para el día ' + rest.data.feAtencionStr);
        window.location.href = "/citas";
      } else {
        alert(rest.errorMessage);
      }
    })
  }

  onSubmit(CoColegiatura : any, CoHorario : any){

    this.data = {
      CoAtencion: this.CoAtencion,
      CoColegiatura: CoColegiatura,
      CoHorario: CoHorario
    }

    if(CoColegiatura != "" && CoHorario != "") {

      if(this.CoAtencion == 0){
        this.programarCita(this.data);
      }
      else{
        this.reprogramarCita(this.data);
      }
      
    } else {
      alert("Formulario no válido");
    }
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.CoAtencion = params.id;
    });
  }

}
