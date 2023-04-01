import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TemplateComponent } from './components/template/template.component';
import { ApresentacaoComponent } from './pages/apresentacao/apresentacao.component';
import { HomeComponent } from './pages/home/home.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { FormacoesComponent } from './pages/formacoes/formacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    AlertaComponent,
    ApresentacaoComponent,
    TemplateComponent,
    CaracteristicasComponent,
    TecnologiasComponent,
    ExperienciasComponent,
    FormacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
