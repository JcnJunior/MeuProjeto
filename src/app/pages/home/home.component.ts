import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/components/alerta/alerta.service';
import { LoadingService } from 'src/app/components/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private loadingService: LoadingService,
    private alertaService: AlertaService,
    private router: Router,
  ) { }

  abrirLoading() {
    this.loadingService.aumentar();
    setTimeout(() => {
      this.loadingService.reduzir();
    }, 3000);
  }

  abrirAlerta() {
    this.alertaService.abrir("Exemplo de alerta", "Olá! eu sou um alerta!");
  }

  navegarPara(endereco: string) {
    this.router.navigateByUrl(endereco);
  }

}
