import { Injectable } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { LoadingComponent } from "./loading.component";

@Injectable({
    providedIn: "root"
})
export class LoadingService {

    private contador = 0;
    private instancia?: NgbModalRef;

    constructor(
        private ngbModal: NgbModal
    ) { }

    aumentar() {
        const deveAbrir = this.contador == 0;
        if (deveAbrir) {
            this.instancia = this.ngbModal.open(LoadingComponent, { backdrop: "static", centered: true, keyboard: false });
        }
        this.contador++;
    }

    reduzir() {
        const deveFechar = this.contador == 1;
        if (deveFechar) {
            this.instancia?.close();
        }
        this.contador--;
    }

}