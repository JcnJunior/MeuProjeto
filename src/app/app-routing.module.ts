import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { ApresentacaoComponent } from './pages/apresentacao/apresentacao.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { FormacoesComponent } from './pages/formacoes/formacoes.component';
import { HomeComponent } from './pages/home/home.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "apresentacao",
  },
  {
    path: "",
    component: TemplateComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "apresentacao",
        component: ApresentacaoComponent,
      },
      {
        path: "caracteristicas",
        component: CaracteristicasComponent,
      },
      {
        path: "tecnologias",
        component: TecnologiasComponent,
      },
      {
        path: "experiencias",
        component: ExperienciasComponent,
      },
      {
        path: "formacoes",
        component: FormacoesComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "apresentacao",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
