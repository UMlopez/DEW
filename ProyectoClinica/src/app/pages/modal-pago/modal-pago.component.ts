import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-modal-pago',
  templateUrl: './modal-pago.component.html',
  styleUrls: ['./modal-pago.component.css']
})
export class ModalPagoComponent implements OnInit {

  @Input() CoAtencion : any;

  pagoForm = this.fb.group({
    NroTarjeta: ['', Validators.required],
    FechaVcto: ['', Validators.required],
    CodigoCVV: ['', Validators.required],
    Nombre: ['', Validators.required],
    Apellido: ['', Validators.required],
    Email: ['', Validators.required]
  });

  data : any = {}

  constructor(public activeModal: NgbActiveModal,
    readonly citaService: CitaService,
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute) {}

  pagarCita(data: any) {
    const token = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token };

    this.citaService.pagarCita(data, header).subscribe((rest: any) => {
      if(rest.isSuccess) {
        alert('Su cita fue pagada');
        window.location.href = "/citas";
      } else {
        alert(rest.errorMessage);
      }
    });
  }

  onSubmit(){
    this.data = {
      CoAtencion: this.CoAtencion
    }

    if(this.pagoForm.valid) {

      this.pagarCita(this.data);
      
    } else {
      alert("Formulario no válido");
    }
  }

  ngOnInit() {
  }

}
