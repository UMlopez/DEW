import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CitaService } from 'src/app/services/cita.service';
import { ModalPagoComponent } from '../modal-pago/modal-pago.component';

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.component.html',
  styleUrls: ['./mis-citas.component.css']
})
export class MisCitasComponent implements OnInit {

  citas : any[] = [];
  data : any = {};
  modalOptions : NgbModalOptions;

  constructor(private readonly citaService: CitaService,
    private modalService: NgbModal) {
    this.listarMisCitas();

    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  listarMisCitas() {
    const token = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token };

    this.citaService.listarMisCitas(header).subscribe((rest: any) => {
      console.log(rest.data);
      this.citas = rest.data;
    });
  }

  anularCita(CoAtencion: string) {
    if(confirm("¿Estás seguro(a) de anular la cita " + CoAtencion + '?')) {
      const token = sessionStorage.getItem('token');
      const header = { Authorization: 'Bearer ' + token };

      this.data = {
        CoAtencion: CoAtencion
      }

      this.citaService.anularCita(this.data, header).subscribe((rest: any) => {
        if (rest.isSuccess) {
          alert('La cita fue anulada');
          window.location.reload();
        } else {
          alert(rest.errorMessage);
        }
      });
    }
  }

  pasarelaPago(CoAtencion : string){
    const modalRef = this.modalService.open(ModalPagoComponent);
    modalRef.componentInstance.CoAtencion = CoAtencion;

    console.log("Pasarela: " + CoAtencion);
  }

  ngOnInit(): void {
  }

}
