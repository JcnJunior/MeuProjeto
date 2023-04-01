import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlertaComponent } from "./alerta.component";

@Injectable({
    providedIn: "root"
})
export class AlertaService {

    constructor(
        private ngbModal: NgbModal
    ) { }

    abrir(titulo: string, mensagem: string) {
        const instancia = this.ngbModal.open(AlertaComponent, { backdrop: "static", centered: true, keyboard: false });
        instancia.componentInstance.titulo = titulo;
        instancia.componentInstance.mensagem = mensagem;
    }

}