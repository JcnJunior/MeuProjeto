import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  menu: MenuItem[] = [
    { texto: "Apresentação", endereco: "apresentacao" },
    { texto: "Características", endereco: "caracteristicas" },
    { texto: "Tecnologias", endereco: "tecnologias" },
    { texto: "Experiências", endereco: "experiencias" },
    { texto: "Formações", endereco: "formacoes" },
  ];

  constructor(
    public router: Router,
  ) { }

}

class MenuItem {
  texto!: string
  endereco!: string
}