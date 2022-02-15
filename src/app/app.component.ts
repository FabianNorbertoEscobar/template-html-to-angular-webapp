import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-template-html-to-angular-webapp';

  constructor(
    public infoPaginaService: InfoPaginaService
  ) {}
}
