import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent {

  @Input() titulo = "";
  @Input() mensagem = "";

  constructor(
    public activeModal: NgbActiveModal
  ) { }

}
